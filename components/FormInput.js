import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const FormInput = ({
    labelText ='',
    placeholderText ='',
    onChangeText = '',
    value = null
})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>
            {labelText}

            </Text>
            <TextInput style={styles.txtinput}
            placeholder={placeholderText}
            onChangeText={onChangeText}
            value={value}>

            </TextInput>
            
        </View>

    );
}
    const styles= StyleSheet.create({
        container:{
            width:'100%',
            marginBottom:20,
         },
         txt:{
            fontWeight:'bold',
            fontFamily:'sans',
            color:'indigo',

         },
        txtinput:{
            padding: 10,
            borderColor:'indigo',
            borderWidth:1.7,
            width:'100%',
            borderRadius:5,
            marginTop:10,
            borderRadius:10,
        },

    })

export default FormInput;
