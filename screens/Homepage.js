import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { fetchDonors } from "./../store/action/bloodBankActions";

const Homepage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDonors());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          props.navigation.navigate("Donation");
        }}
      >
        <View>
          <Text style={styles.text}>Wanna donate blood ?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate("Find Donor")}
      >
        <View>
          <Text style={styles.text}>Need Blood ?</Text>
        </View>
      </TouchableOpacity>
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
