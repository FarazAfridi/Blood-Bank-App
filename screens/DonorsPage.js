import React from 'react';
import { useState } from 'react';
import {Text, View, StyleSheet, Button, TextInput} from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addDonor } from './../store/action/bloodBankActions';

const DonorsPage = () => {
    const dispatch = useDispatch();
    const donors = useSelector(state => state.blood.donors)
    const [donorBloodGroup, setDonorBloodGroup] = useState('')
    const [donorName, setDonorName] = useState('')
    const id = Math.floor(Math.random() * 10000).toString()

    return ( 
        <View>
            <FlatList data={donors} renderItem={(itemData) => {
                return <View style={styles.donorsContainer}>
                    <Text>{itemData.item.name}</Text>
                    <Text>{itemData.item.bloodGroup}</Text>
                </View>
            }} />
            <View>
            <TextInput placeholder="Blood Group" onChangeText={setDonorBloodGroup} />
            <TextInput placeholder="Donor Name" onChangeText={setDonorName} />
            <Button title="Add Donor" onPress={() => dispatch(addDonor({id ,name: donorName, bloodGroup: donorBloodGroup}))}/>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
donorsContainer: {
    width: '300px',
    height: '100px',
    padding: 10,
    justifyContent:'center',
    alignItems: 'center',
}
})
 
export default DonorsPage;