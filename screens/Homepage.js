import React, {useEffect} from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useDispatch } from 'react-redux';
import { fetchDonors } from './../store/action/bloodBankActions';

const Homepage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDonors())
  }, [dispatch])
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback useForeground={true}>
        <Text
          style={styles.text}
          onPress={() => {
            props.navigation.navigate("Donation");
          }}
        >
          Wanna donate blood ?
        </Text>
      </TouchableNativeFeedback>
      <Text
        style={styles.text}
        onPress={() => props.navigation.navigate("Find Donor")}
      >
        Need Blood ?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 26,
    padding: 10,
    color: "#B71C1C",
  },
});

export default Homepage;
