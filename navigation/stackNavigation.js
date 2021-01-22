import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './../screens/Homepage';
import Login from './../screens/Login';
import DonorsPage from './../screens/DonorsPage';
import DonationPage from './../screens/DonationPage';
import FindDonor from './../screens/FindDonor';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Donors" component={DonorsPage} />
      <Stack.Screen name="Donation" component={DonationPage} />
      <Stack.Screen name="Find Donor" component={FindDonor} />
    </Stack.Navigator>
  );
}