import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount(){
  firebase.initializeApp({
    apiKey: 'AIzaSyDmbKmgMubZbH6HmnmW3Gg4lg8eXsBJoDc',
    authDomain: 'authentication-693f3.firebaseapp.com',
    databaseURL: 'https://authentication-693f3.firebaseio.com',
    projectId: 'authentication-693f3',
    storageBucket: 'authentication-693f3.appspot.com',
    messagingSenderId: '142794454858'
  });
}
  render () {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}
export default App;
