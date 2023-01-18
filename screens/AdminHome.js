import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';  
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';


function AdminHome(navigation, route){

    const[question, setquestion] = React.useState('')
    const[correctanswer, setcorrectAnswer] = React.useState('')
    const[opt2, setopt2] = React.useState('')
    const[opt3, setopt3] = React.useState('')
    const[opt4, setopt4] = React.useState('')

    const handleQuestion = ()=>{
        alert("Quiz Saved")

    }
        return(
            <KeyboardAvoidingView style={{flex:1,}}>
            <ScrollView style={styles.scroll}>
            <View style={styles.view}>
            <Text style={styles.txt}>
            Add Questions!
            </Text>
            <FormInput labelText='Question'
             placeholderText='Enter Question'
            onChangeText={val =>setquestion(val)}
            value={question}
            />
            <View style={{marginTop:20, }}>
            <FormInput labelText='Correct Answer' onChangeText={val => setcorrectAnswer(val)} value={correctanswer}/>
            <FormInput labelText='Option 2' onChangeText={val => setopt2(val)} value={opt2}/>
            <FormInput labelText='Option 3' onChangeText={val => setopt3(val)} value={opt3}/>
            <FormInput labelText='Option 4' onChangeText={val => setopt4(val)} value={opt4}/>

            </View>
            <FormButton labelText='Save Question' handleonPress={handleQuestion}/>

            </View>

            </ScrollView>

            </KeyboardAvoidingView>
         );
    
}
const styles = StyleSheet.create({
    scroll:{
        flex:1,
        backgroundColor:'#D7ECFE',
    },
    txt:{
        fontSize:20,
        textAlign:'center',
        color:'darkred',
        fontWeight:'900',
        marginBottom:20
        
    },
    view:{
        padding:20,
    },
})
export default AdminHome