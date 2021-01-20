import React from "react";
import { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { findDonor } from "../store/action/bloodBankActions";
import { CheckBox } from "native-base";

const Homepage = ({ navigation }) => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [bg, setBg] = useState(false);
  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.Container}>
        <View>
          <Text>Blood Group :</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <CheckBox checked={bg} onPress={() => setBg(!bg)} />
            <Text style={styles.text}>A</Text>
          </View>
          <View style={styles.input}>
            <CheckBox checked={bg} onPress={() => setBg(!bg)} />
            <Text style={styles.text}>B</Text>
          </View>
          <View style={styles.input}>
            <CheckBox checked={bg} onPress={() => setBg(!bg)} />
            <Text style={styles.text}>AB</Text>
          </View>
        </View>
      </View>

      {/* <TextInput placeholder="Blood Group" onChangeText={setBloodGroup} />
      <TextInput placeholder="Location" onChangeText={setLocation} /> */}

      <Button
        title="Move to Donors"
        onPress={() => {
          navigation.navigate("Donors");
          dispatch(findDonor({ bloodGroup: bloodGroup, location }));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: 300,
  },
  inputContainer: {
    flexDirection: "column",
  },
  text: {
      margin: 10,
      padding: 10
  },
  input: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
  }
});

export default Homepage;
