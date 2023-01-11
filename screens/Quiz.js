import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';  

function Quiz({navigation}){ 
        return(
            <ScrollView>
            <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.question}>Q. What will be the answer of 5 + 5:</Text>

            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 20</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 30</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 40</Text>
            </TouchableOpacity>
            <View style={styles.imagecon}>
                <Image
                source={{
                    uri:'https://iconscout.com/illustration/online-quiz-5718736'
                }}
                />

                
            </View>

            </View>

            <View style={styles.header}>
            <Text style={styles.question}>Q. What will be the result of 10+10:</Text>

            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 25</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 20</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 15</Text>
            </TouchableOpacity>
            <View style={styles.imagecon}>
                <Image
                source={{
                    uri:'https://iconscout.com/illustration/online-quiz-5718736'
                }}
                />

                
            </View>

            </View>

            <View style={styles.header}>
            <Text style={styles.question}>Q. What will be the result of 4 + 4:</Text>

            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 12</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 14</Text>
            </TouchableOpacity>
            <View style={styles.imagecon}>
                <Image
                source={{
                    uri:'https://iconscout.com/illustration/online-quiz-5718736'
                }}
                />

                
            </View>

            </View>

            <View style={styles.header}>
            <Text style={styles.question}>Q. What will be the result of 8 + 8:</Text>

            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 16</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 2</Text>
            </TouchableOpacity>
            <View style={styles.imagecon}>
                <Image
                source={{
                    uri:'https://iconscout.com/illustration/online-quiz-5718736'
                }}
                />

                
            </View>

            </View>

            <View style={styles.header}>
            <Text style={styles.question}>Q. What will be the result of 9 + 9:</Text>

            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 16</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 18</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 20</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}> 22</Text>
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
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Result")}>
                <Text style={styles.buttontext}>End </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Result")}>
                <Text style={styles.buttontext}>Next</Text>
            </TouchableOpacity>

            </View>

            </View>


            </ScrollView>
            
        );
    }
const styles = StyleSheet.create({
    container: {
      padding:12,
      height:"100%",
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
        justifyContent:"space-between",
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
        fontFamily:"calibri",
        color:"black"

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
    }
})
export default Quiz