import React from 'react';
import {View, Text, Picker, StyleSheet} from "react-native";

const ItemPicker = (props) => {
    return ( 
        <View>
        <Text style={styles.text}>{props.title}</Text>
        <Picker
          selectedValue={props.stateValue}
          style={{ height: 50, width: 200, margin: 10 }}
          onValueChange={(itemValue, itemIndex) => props.setStateValue(itemValue)}
        >
        <Picker.Item label={props.label1} value={props.value1} />
          <Picker.Item label={props.label2} value={props.value2} />
          <Picker.Item label={props.label3} value={props.value3} />
          <Picker.Item label={props.label4} value={props.value4} />
          <Picker.Item label={props.label5} value={props.value5} />
        </Picker>
      </View>
     );
}

const styles = StyleSheet.create({
    text: {
      marginLeft: 10,
      padding: 8,
    },
  });
 
export default ItemPicker;