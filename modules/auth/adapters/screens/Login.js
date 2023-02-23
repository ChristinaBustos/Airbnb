import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input, Button, Image, Icon } from "@rneui/base";
import { isEmpty } from "lodash";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "../../../../kernel/components/Loading";


export default function Login() {
  const [error, setError] = useState({email:'',password:''});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image
        source={require("../../../../assets/logo.png")}
        resizeMode="contain"
        style={styles.logotype}
      />
      <Input
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        containerStyle={styles.input}
        onChange={(event) => setEmail(event.nativeEvent.text)}
        errorMessage={error.email}
        autoCapitalize="none"
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        onChange={(event) => setPassword(event.nativeEvent.text)}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="#fe5d63"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        errorMessage={error.password}
      />
      <Button
        title="Iniciar sesión"
        icon={
          <Icon
            type="material-community"
            name="login"
            size={22}
            color="#fff"
          />
        }
        buttonStyle={styles.btnSuccess}
        containerStyle={styles.btnContainer}
       
      />

      <Loading show={show} text="Iniciando sesión" />
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#fff",
    height: "100%",
  },
  logotype: {
    width: "100%",
    height: 150,
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  btnSuccess: {
    color: "#fff",
    backgroundColor: "#fe5d63",
  },
  btnContainer: {
    margin: 16,
  },
  createAccount: {
    color: "#007bff",
    marginBottom:16
  },
})