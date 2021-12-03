import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, } from 'react-native';
import { Navbar } from './src/Navbar';
import { Footer } from './src/Footeer';
import { Content } from './src/Content';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
      <Content/>
      <Footer/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
