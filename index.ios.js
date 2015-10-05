/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
  NavigatorIOS,
} = React;

var PeopleList = require('./src/PeopleList');

var Nesdex = React.createClass({
  componentWillMount: function() {
    StatusBarIOS.setStyle('light-content');
  },
  render: function() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        barTintColor="#2F2F2F"
        titleTextColor="#FFFFFF"
        initialRoute={{
          component: PeopleList,
          title: 'Nesdex',
          passProps: { myProp: 'foo' },
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#464266',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Nesdex', () => Nesdex);
