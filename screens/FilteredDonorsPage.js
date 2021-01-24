import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, LogBox, Button } from "react-native";
import { useSelector } from "react-redux";
import DonorsList from './../components/donorsList';

const FilteredDonorsPage = () => {
  const donors = useSelector((state) => state.blood.filteredDonors);

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

export default FilteredDonorsPage;