import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";  
import { auth } from '../firebase/firebase.config';



function Login({navigation}){ 
  const[email,setemail] = React.useState(null)
const[password, setpass] = React.useState(null)

  const loginbtn=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigation.navigate("Home")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }

        return ( 
            <View style={styles.container}>
            
            
            <View style={styles.imagecon}>
            <TouchableOpacity style={styles.header}>
            <Text style={styles.head}>Login Page</Text>

            </TouchableOpacity>
            <Image style={styles.image} source={require("../images/login.png")} />

            </View>
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
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={password}
          onChangeText={setpass}
          secureTextEntry={true}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgotBtn}>Forgot Password?</Text>
      </TouchableOpacity>

 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>loginbtn()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn1} onPress={()=>navigation.navigate("AdminLogin")} >
        <Text style={styles.loginText}> ADMIN LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signupview}>
      <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.signup}>Don't have an account Sign up?</Text>
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
    width:"100%",
    marginBottom:30,
    },

  head:{
    fontSize:30,
    fontWeight:"900",
    color:"darkred",

  },
  imagecon: {
    alignItems:'center',
    justifyContent: "center",
    marginTop:60,

  },
 
  image: {
    resizeMode:'cover',
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 10,
    marginTop:20,
 
    alignItems: "center",
    justifyContent:"center",
  },
 
  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 10,
    textAlign:"center"
  },
 
  forgotBtn: {
    height: 30,
    marginBottom: 20,
    marginLeft: 15,
    marginTop: 10
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
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
  loginBtn1: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
})
export default Login
