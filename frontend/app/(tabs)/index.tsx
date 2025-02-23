import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  const [tradersMessage, setTradersMessage] = useState('');

  // Fetch the message from the backend
  const fetchTradersMessage = async () => {
    try {
      const response = await fetch('http://11.44.255.91:5000/hello'); 
      const data = await response.json();
      setTradersMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  useEffect(() => {
    fetchTradersMessage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello TradeWise!</Text>
      {tradersMessage ? <Text style={styles.subtitle}>{tradersMessage}</Text> : null}
      <HelloWave />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000', // Optional: To make the background dark for better visibility
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // White text
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: 'white', // White text
  },
});
