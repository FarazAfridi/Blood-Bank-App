import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, LogBox } from "react-native";
import { useSelector } from "react-redux";
import DonorsList from './../components/donorsList';

const DonorsPage = () => {
  const donors = useSelector((state) => state.blood.donors);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
       <DonorsList donors={donors} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});

export default DonorsPage;
