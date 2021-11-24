import React from "react";
import { View, StyleSheet } from "react-native";

export const Footer = (props) => {
    return (
      <View style={styles.bottom} />
    );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 0.1,
    backgroundColor: "#FFFAFA",
    justifyContent: 'flex-end',
  
  },
});

