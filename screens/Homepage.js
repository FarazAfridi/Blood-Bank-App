import React from "react";
import { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import { useDispatch } from 'react-redux';
import { findDonor } from "../store/action/bloodBankActions";

const Homepage = ({ navigation }) => {
    const [bloodGroup, setBloodGroup] = useState('')
    const [location, setLocation] = useState('')
    const dispatch = useDispatch();

  return (
    <View>
    <TextInput style={{padding: '10px'}} placeholder="Blood Group" onChangeText={setBloodGroup} />
    <TextInput style={{padding: '10px'}} placeholder="Location" onChangeText={setLocation}  />
  
      <Button
        title="Move to Donors"
        onPress={() => {
            navigation.navigate("Donors")
            dispatch(findDonor({bloodGroup: bloodGroup, location}))
            }}
      />
      
    </View>
  );
};

export default Homepage;
