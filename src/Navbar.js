import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, } from 'react-native';

export const Navbar = (props) =>{
    return(  
          
         <View style={styles.header}>
        <Text style={styles.text}>CZ Helper</Text>
        </View>)

    
};



const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 0.1,
        backgroundColor: '#104780', 
        opacity: 5,
    },
    text:{
      fontSize: 20,
      color: 'white',
    },
});