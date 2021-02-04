import React from "react";
import { Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./../screens/Homepage";
import Login from "./../screens/Login";
import DonorsPage from "./../screens/DonorsPage";
import DonationPage from "./../screens/DonationPage";
import FindDonor from "./../screens/FindDonor";
import FilteredDonorsPage from "../screens/FilteredDonorsPage";
import { useSelector, useDispatch } from "react-redux";
import { logout } from './../store/action/authActions';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export function MyStack() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  console.log("token", token);

  return (
    <Stack.Navigator>
      {!token ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen
            options={() => {
              return {
                headerRight: () => (
                  <View style={{padding: 10}}>
                <Button title="Logout" color="#B71C1C" onPress={() => {
                  AsyncStorage.removeItem('userData')
                  dispatch(logout())
                  }} />
                </View>
                ),
              };
            }}
            name="Home"
            component={Homepage}
          />
          <Stack.Screen name="Donors" component={DonorsPage} />
          <Stack.Screen name="Donation" component={DonationPage} />
          <Stack.Screen name="Find Donor" component={FindDonor} />
          <Stack.Screen name="Donor" component={FilteredDonorsPage} />
        </>
      )}
    </Stack.Navigator>
  );
}
