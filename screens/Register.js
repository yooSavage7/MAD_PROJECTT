import React, { Component, useState } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';  

function Register({navigation}){ 
  const [email, setemail] = React.useState('')
  const [password, setpass] = React.useState('')
  const [username, setusername] = React.useState('')
  //const[cp, setcp] = React.useState('')

  function postdata(){
    createUserWithEmailAndPassword(auth, email, password, username)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("User Created")
    navigation.navigate("Home");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  }
        return (  
            <View style={styles.container}>
            
            
            <View style={styles.imagecon}>
            <TouchableOpacity style={styles.header}>
            <Text style={styles.head}>Signup Page</Text>

            </TouchableOpacity>
            <Image style={styles.image} source={require("../images/signup.png")} />

            </View>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={setemail}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          value={username}
          onChangeText={setusername}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={setpass}

        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm-Pass"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>

 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>postdata()}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

      <View style={styles.signupview}>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.signup}>Already have an account Log'in?</Text>
      </TouchableOpacity>

      </View>


      
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width:"100%",
    height:"100%",
    backgroundColor:"aliceblue"
  },
  header:{
    height:50,
    width:"50%",
    marginBottom:30,
    marginTop:30,


  },

  head:{
    fontSize:30,
    fontWeight:"900",
    color:"darkred",

  },
  imagecon: {
    alignItems: "center",
    marginBottom:40

  },
 
  image: {
    resizeMode:'cover',
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 40,
    marginTop:15,
    marginBottom: 10,
 
    alignItems: "center",
    justifyContent:"center",
  },
 
  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 10,
    textAlign:"center"
  },
  loginText:{
    fontSize:15,
    fontWeight:"500",

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
    marginTop: 10,
    fontSize:15,
    fontWeight:"500",
    textAlign:"center"
    

  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#FF1493",
  },
})
export default Register
