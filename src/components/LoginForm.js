import React, {Component} from 'react';
import {View} from 'react-native';
import {Card, Button, CardSection} from './components/common';

class LoginForm extends Component{
  render(){
    return(
      <Card>
      <CardSection />
      <CardSection />

      <CardSection>
      <Button>
      Login
      </Button>
      <CardSection/>
      </Card>
    );
  }
}
