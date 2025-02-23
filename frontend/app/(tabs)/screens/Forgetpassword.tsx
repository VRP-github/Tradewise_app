import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

export default function ForgetPasswordScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <View style={styles.backButtonCircle}>
          <Text style={styles.backButtonText}>←</Text>
        </View>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Forget Password?</Text>
      <Text style={styles.title2}>Enter your registered email address below to recieve password reset instructions.</Text>

      {/* Email Input */}
      <Text style={styles.inputLabel}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. john@example.com"
        placeholderTextColor="#C7C7CD"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('./Entercode')}>
        <Text style={styles.loginButtonText}>Reset Password</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Remember password? </Text>
        <TouchableOpacity onPress={() => router.push('./Signin')}>
          <Text style={styles.signUpLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F5FF",
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: "#A294F9",
    lineHeight: 24, 
    textAlign: 'center',
    textAlignVertical: 'center', 
    includeFontPadding: false, 
    paddingTop: 2, 
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  title2:{
    color:"#9992a7",
    fontSize:13,
    marginBottom:40,
  },
  inputLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 40,
    backgroundColor: "#F9F9F9",
  },
  backButtonCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0EBFF',  
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#A294F9",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 'auto',
  },
  signUpText: {
    fontSize: 16,
    color: "#8E8E93",
  },
  signUpLink: {
    fontSize: 16,
    color: "#A294F9",
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
});
