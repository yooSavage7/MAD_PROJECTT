import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';

const FormButton = ({
    labelText ='',
    handleonPress=null,
    style,
    isPrimary = true,
})=>{
    return(
        <TouchableOpacity style={styles.btn}
        activeOpacity={1}
        onPress={handleonPress}>
        <Text style={{textAlign:'center',
        fontSize:18,
        color:'white',
        }}> {labelText}</Text>

        </TouchableOpacity>

    );

}
const styles= StyleSheet.create({
    btn:{
        paddingVertical:10,
        backgroundColor:'indigo',
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        width:'80%',
        marginLeft:38,
        marginVertical:15
    },

})
export default FormButton;