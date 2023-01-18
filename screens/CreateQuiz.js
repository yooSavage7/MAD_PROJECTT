import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert, SafeAreaView, ToastAndroid } from 'react-native';  
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { createQuiz } from '../firebase/database';
import { FirebaseApp } from 'firebase/app';
import { firebase } from '@react-native-firebase/auth';

const CreateQuiz = ({navigation})=>{
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const SaveQuiz = ()=>{
        alert("Quiz Saved!")
        navigation.navigate("AdminHome");

       // const currentQuizId = Math.floor(100000+Math.random()*9000).toString();
        //save to firestore
       // await createQuiz(currentQuizId, title, description)
        //naviagtion.navigate('AdminHome',{
           // currentQuizId: currentQuizId,
           // currentQuizTitle:title,
      //  });
        //Reset
       // setTitle('')
       // setDescription('')
       // ToastAndroid.show('Quiz Saved', ToastAndroid.SHORT);
    };
    
    return(
        <SafeAreaView style={styles.main}>
        <Text style={styles.txt}>
        Create Quiz
        </Text>
        <FormInput
            labelText='Title'
            placeholderText='Enter Quiz Title'
            onChangeText={val=>setTitle(val)}
            value={title}
        />
        <FormInput
            labelText='Description'
            placeholderText='Enter Quiz Description'
            onChangeText={val=>setDescription(val)}
            value={description}
        />
        <FormButton labelText='Save Quiz' handleonPress={SaveQuiz}/>

        </SafeAreaView>

    );


}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white',
        padding: 20,
        backgroundColor:'#D7ECFE'
    },
    txt:{
        fontSize:20,
        textAlign:'center',
        marginTop:15,
        marginBottom:20,
        color:'indigo',
        fontWeight:'900'
    },

});

export default CreateQuiz