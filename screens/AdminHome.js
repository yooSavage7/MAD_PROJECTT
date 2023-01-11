import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';  

function AdminHome(navigation){
        return(
            <View style={styles.container}>
            <View style={styles.title}>
            <Text style={styles.titletext}> Questions:</Text>

            </View>
            <View style={styles.header}>
            <Text style={styles.question}>Q. What will be the result of this question:</Text>

            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> Option 4</Text>
            </TouchableOpacity>
            <View style={styles.imagecon}>
                <Image
                source={{
                    uri:'https://iconscout.com/illustration/online-quiz-5718736'
                }}
                />

                
            </View>

            </View>
            <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Submit</Text>
            </TouchableOpacity>

            </View>

            </View>

        );
    
}
const styles = StyleSheet.create({
    container: {
      padding:12,
      height:"100%",
      paddingHorizontal:20,
      backgroundColor:"aliceblue"
    },
    header:{
        marginVertical:12,
    },
    options:{
        marginVertical:12,
        flex:1,

    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:"center",
        flexDirection:"row",
    },
    button:{
        backgroundColor:"#1A759F",
        padding:12,
        paddingHorizontal:16,
        borderRadius:16,
        alignItems:"center",
        marginBottom:30,
        
    },
    buttontext:{
        fontSize:18,
        fontWeight:"600",
        color:"white",
    },
    question:{
        fontSize:28,
        fontWeight:"bold",

    },
    option:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
    },
    optionButton:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:"#34A0A4",
        paddingHorizontal:12,
        borderRadius:15,
    },
    imagecon:{
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        alignItems:"center",
    },
    titletext:{
        fontSize:28,
        fontWeight:"bold",
        color:"darkred",
        marginVertical:20,

    },

})
export default AdminHome