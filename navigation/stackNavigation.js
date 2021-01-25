import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./../screens/Homepage";
import Login from "./../screens/Login";
import DonorsPage from "./../screens/DonorsPage";
import DonationPage from "./../screens/DonationPage";
import FindDonor from "./../screens/FindDonor";
import FilteredDonorsPage from "../screens/FilteredDonorsPage";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export function MyStack() {
  const token = useSelector((state) => state.auth.token);
  console.log("token", token);

  return (
    <Stack.Navigator>
      {!token ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Donors" component={DonorsPage} />
          <Stack.Screen name="Donation" component={DonationPage} />
          <Stack.Screen name="Find Donor" component={FindDonor} />
          <Stack.Screen name="Donor" component={FilteredDonorsPage} />
        </>
      )}
    </Stack.Navigator>
  );
}
