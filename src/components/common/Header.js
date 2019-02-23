import React, { Component }from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sim: {
    color: '#3CB371',
    fontSize: 20,
  },
  background:{
    backgroundColor: '#EE3B3B',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 19},
    shadowOpacity: 30,
  }

  });

class Header extends React.Component{
  render () {
    return(
      <View style={styles.background}>
      <Text style={styles.sim}>Authentication{this.props.name}</Text>
      </View>
    );
  }
}
export {Header};
