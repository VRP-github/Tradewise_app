import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Link} from 'expo-router';


export default function Example() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/stock-market-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--business-growth-graph-chart-data-essentials-pack-illustrations-2813582.png?f=webp' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Plan your Trades{'\n'}with{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>TradeWise</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            Everything you need for consistent profitability
          </Text>
        </View>

        <Link href="./screens/Signin" asChild>
          <TouchableOpacity>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="./screens/Signup" asChild>
          <TouchableOpacity>
            <View style={styles.button2}>
              <Text style={styles.buttonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </Link>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F8F5FF',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
    marginBottom: 25,
  },
  /** Hero */
  hero: {
    backgroundColor: '#E5D9F2',
    margin: 12,
    borderRadius: 16,
    padding: 16,
    marginTop:45,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#281b52',
  },
  /** Button */
  button1: {
    backgroundColor: '#A294F9',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: 300, 
    marginLeft: 12,
    marginBottom: 5,
  },
  button2: {
    backgroundColor: '#A294F9',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: 300, 
    marginLeft:12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#fff',
  },
});