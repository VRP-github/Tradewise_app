import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
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
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.title2}>Start your journey with us</Text>

      {/* Email Input */}
      <Text style={styles.inputLabel}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="johndoe"
        placeholderTextColor="#C7C7CD"
        autoCapitalize="none"
      />

      <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          placeholderTextColor="#C7C7CD"
          autoCapitalize="none"
        />

        <Text style={styles.inputLabel}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          placeholderTextColor="#C7C7CD"
          keyboardType="email-address"
          autoCapitalize="none"
        />

      {/* Password Input */}
      <Text style={styles.inputLabel}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#C7C7CD"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <MaterialCommunityIcons
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color="#CDC1FF"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity> */}

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Already have an Account?</Text>
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
  title2:{
    color:"#9992a7",
    marginBottom:40,
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
    marginBottom: 5,
  },
  inputLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#F9F9F9",
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 8,
    marginBottom: 50,
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
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#A294F9",
    fontSize: 13,
    marginBottom: 30,
    textDecorationLine: 'underline',
    fontWeight:'bold',
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
