import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header} from './src/components/common';
import LoginForm from './src/components';

class App extends Component{
  ComponentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBtWncigRYcyI_Qu5t9uPKhyrZJOKRaCqA',
    authDomain: 'auth-85196.firebaseapp.com',
    databaseURL: 'https://auth-85196.firebaseio.com',
    projectId: 'auth-85196',
    storageBucket: 'auth-85196.appspot.com',
    messagingSenderId: '582621650722'

    });
  }
  render (){
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>

    );
  }
}
export default App;
