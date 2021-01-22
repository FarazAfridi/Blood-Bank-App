import { Button, View, TextInput } from "react-native";
import React, {useState} from 'react';
import { addDonor } from "./../store/action/bloodBankActions";
import { useDispatch } from 'react-redux';

const DonationPage = (props) => {
    const [donorBloodGroup, setDonorBloodGroup] = useState("");
    const [donorName, setDonorName] = useState("");
    const id = Math.floor(Math.random() * 10000).toString();
    const [donorLocation, setDonorLocation] = useState("");
    const dispatch = useDispatch();
    
    return ( 
        <View>
        <TextInput
          placeholder="Blood Group"
          onChangeText={setDonorBloodGroup}
        />
        <TextInput placeholder="Donor Name" onChangeText={setDonorName} />
        <TextInput
          placeholder="Donor Location"
          onChangeText={setDonorLocation}
        />
        <Button
          title="Add Donor"
          color="#B71C1C"
          onPress={() =>{
            dispatch(
              addDonor({
                id,
                name: donorName,
                bloodGroup: donorBloodGroup,
                location: donorLocation,
              })
            )
            props.navigation.navigate("Donors")
            }
          }
        />
      </View>
     );
}
 
export default DonationPage;