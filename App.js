import React from 'react';
import thunk from 'redux-thunk';
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from './navigation/stackNavigation';
import {createStore, combineReducers, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import bloodBankReducer from './store/reducer/bloodBankReducer';

export default function App() {
  const rootReducer = combineReducers({
    blood: bloodBankReducer
  })

  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
   <NavigationContainer>
   <Provider store={store}>
     <MyStack />
     </Provider>
   </NavigationContainer>
  );
}

