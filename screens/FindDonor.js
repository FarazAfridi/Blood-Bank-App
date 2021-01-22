import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Picker,
} from "react-native";
import { useDispatch } from "react-redux";
import { findDonor } from "../store/action/bloodBankActions";

const FindDonor = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.Container}>
        <View>
          <Text style={styles.text}>Blood Group :</Text>
        </View>
        <View>
        <Picker
          selectedValue={bloodGroup}
          style={{ height: 50, width: 200, margin: 10 }}
          onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
        >
          <Picker.Item label="Blood Group" value="" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="AB" value="AB" />
          <Picker.Item label="O" value="O" />
        </Picker>
      </View>

      </View>
      <View>
        <Text style={styles.text}>Location:</Text>
        <Picker
          selectedValue={location}
          style={{ height: 50, width: 200, margin: 10 }}
          onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
        >
          <Picker.Item label="location" value="" />
          <Picker.Item label="Karachi" value="Karachi" />
          <Picker.Item label="Lahore" value="Lahore" />
          <Picker.Item label="Islamabad" value="Islamabad" />
          <Picker.Item label="Quetta" value="Quetta" />
        </Picker>
      </View>
      <Button
        title="Move to Donors"
        color="red"
        onPress={() => {
          navigation.navigate("Donors");
          dispatch(findDonor({ bloodGroup, location }));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
  },
  inputContainer: {
    paddingVertical: 10
  },
  text: {
    marginLeft: 10,
    padding: 8,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});

export default FindDonor;