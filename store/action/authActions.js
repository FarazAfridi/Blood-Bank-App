import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const USER_EXIST = "USER_EXIST";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAx6y5rLqStbW5sNzxGin_FmdO6l0JgSMI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const data = await response.json();
    const { idToken } = data;

    dispatch({ type: SIGN_UP, token: idToken});
    saveDataToStorage(idToken)
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAx6y5rLqStbW5sNzxGin_FmdO6l0JgSMI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok){
      const errorData = await response.json();
      const errorId = errorData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND'){
        message = 'This email could not be found'
      } else if (errorId === 'INVALID_PASSWORD'){
        message = 'This password is not valid'
      }
      throw Error(message)
    }

    const {idToken} = await response.json();

    dispatch({ type: LOGIN, token: idToken});
    saveDataToStorage(idToken)
  };
};

const saveDataToStorage = async (token, expiryDate) => {
  await AsyncStorage.setItem('userData', JSON.stringify({
    token,
  }))
}

export const userExist = (token) => {
  return {
    type: USER_EXIST,
    payload: token
  }
}