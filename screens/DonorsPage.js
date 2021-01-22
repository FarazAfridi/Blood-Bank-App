import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, LogBox, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const DonorsPage = () => {
  const donors = useSelector((state) => state.blood.filteredDonors);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
          <FlatList
            data={donors}
            renderItem={(itemData) => {
              return (
                <View style={styles.donorsContainer}>
                  <Text style={styles.bold}>
                    Name: <Text style={styles.normal}>{itemData.item.name}</Text>
                  </Text>
                  <Text style={styles.bold}>
                    Blood Group: <Text style={styles.normal}>{itemData.item.bloodGroup}</Text>
                  </Text>
                  <Text style={styles.bold}>
                    Location: <Text style={styles.normal}> {itemData.item.location}</Text>
                  </Text>
                  <View style={{marginVertical: 10}}>
                  <Button title="Contact Now" color="#B71C1C" />
                  </View>
                </View>
              );
            }}
          />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  donorsContainer: {
    width: 280,
    height: 150,
    margin: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#B71C1C",
    borderRadius: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  normal: {
    fontWeight: 'normal'
  }
});

export default DonorsPage;
