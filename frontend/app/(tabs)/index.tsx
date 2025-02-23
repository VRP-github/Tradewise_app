import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Import StatusBar
import WelcomeScreen from './screens/WelcomeScreen'; // Assuming this is the path to WelcomeScreen

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Configure the StatusBar */}
      <StatusBar style="dark" backgroundColor="#F8F5FF" translucent={true} />
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Black text
  },
});
