import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { login, signup, userExist } from "./../store/action/authActions";

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
    const checkIfLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");

      if (!userData) {
        return;
      }
      const { token } = JSON.parse(userData);

      if (!token) {
        return;
      }
      
      dispatch(userExist(token))
    };
    checkIfLogin()
  }, [error]);

  const handleSubmit = async (email, password) => {
    let action;
    if (email !== "" && password !== "") {
      if (isLogin) {
        action = login(email, password);
      } else {
        action = signup(email, password);
      }
      setError(null);
      try {
        await dispatch(action);
        props.navigation.navigate("Home");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <View>
      {isLogin ? null : <TextInput placeholder="Username" />}
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />
      <Button
        title={isLogin ? "Login" : "Sign Up"}
        onPress={() => handleSubmit(email, password)}
      />
      <Text onPress={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Dont have an account SignUp"
          : "Already have an account Login"}
      </Text>
    </View>
  );
};

export default Login;
