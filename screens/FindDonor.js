import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { findDonor } from "../store/action/bloodBankActions";
import ItemPicker from "./../components/picker";

const FindDonor = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <View>
          <ItemPicker
            title="Blood Group"
            stateValue={bloodGroup}
            setStateValue={setBloodGroup}
            label1="Blood Group"
            label2="A"
            label3="B"
            label4="AB"
            label5="O"
            value1=""
            value2="A"
            value3="B"
            value4="AB"
            value5="O"
          />
        </View>
      </View>

      <ItemPicker
        title="Location"
        stateValue={location}
        setStateValue={setLocation}
        label1="Location"
        label2="Karachi"
        label3="Lahore"
        label4="Islamabad"
        label5="Quetta"
        value1=""
        value2="Karachi"
        value3="Lahore"
        value4="Islamabad"
        value5="Quetta"
      />

      <Button
        title="Move to Donors"
        color="red"
        onPress={() => {
          navigation.navigate("Donor");
          dispatch(findDonor({ bloodGroup, location }));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
  },
});

export default FindDonor;
