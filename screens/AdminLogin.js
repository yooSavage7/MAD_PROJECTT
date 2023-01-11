import React, { Component, useState } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';  

function AdminLogin({navigation}){
        return (  
            <View style={styles.container}>
            
            
            <View style={styles.imagecon}>
            <TouchableOpacity style={styles.header}>
            <Text style={styles.head}>Admin Login</Text>

            </TouchableOpacity>
            <Image style={styles.image} source={require("../images/blogger.png")} />

            </View>
      <StatusBar style="auto" />
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotBtn}>Forgot Password?</Text>
      </TouchableOpacity>

 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("AdminLayout")} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signupview}>

      </View>


      
    </View>
  );

}
 
const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems: "center",
    width:"100%",
    height:"100%",
    backgroundColor:"aliceblue"
  },
  header:{
    height:50,
    width:"50%",
    marginBottom:30,


  },

  head:{
    fontSize:30,
    fontWeight:"900",
    color:"darkred",

  },
  imagecon: {
    alignItems: "center",
    marginTop:80

  },
 
  image: {
    resizeMode:'cover',
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginTop: 30,
 
    alignItems: "center",
    justifyContent:"center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    textAlign:"center"
  },
 
  forgotBtn: {
    height: 30,
    marginTop:20
  },
  signupview:{
    borderRadius: 30,
    width:"60%",
    height:50,
    alignItems:"center",
    marginTop:20,
  },
  signup:{
    height: 30,
    marginTop: 20,
    fontSize:15,
    fontWeight:"500",
    

  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
})
export default AdminLogin