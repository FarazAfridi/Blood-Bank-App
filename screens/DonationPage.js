import { Button, View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { addDonor } from "./../store/action/bloodBankActions";
import { useDispatch } from "react-redux";

const DonationPage = (props) => {
  const [donorBloodGroup, setDonorBloodGroup] = useState("");
  const [donorName, setDonorName] = useState("");
  const id = Math.floor(Math.random() * 10000000000).toString();
  const [donorLocation, setDonorLocation] = useState("");
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={styles.input}
        placeholder="Blood Group"
        onChangeText={setDonorBloodGroup}
      />
      <TextInput
        style={styles.input}
        placeholder="Donor Name"
        onChangeText={setDonorName}
      />
      <TextInput
        style={styles.input}
        placeholder="Donor Location"
        onChangeText={setDonorLocation}
      />
      <Button
        title="Add Donor"
        color="#B71C1C"
        onPress={() => {
          dispatch(
            addDonor({
              id,
              name: donorName,
              bloodGroup: donorBloodGroup,
              location: donorLocation,
            })
          );
          props.navigation.navigate("Donors");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderBottomWidth: 2,
    borderColor: "#B71C1C",
  },
});

export default DonationPage;
