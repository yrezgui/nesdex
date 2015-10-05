'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} = React;

var PeopleList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([
        {
          name: 'Sam Soffes',
          job: 'Freelance developer',
        },
        {
          name: 'Adelle Charles',
          job: 'Lead Visual Designer',
        },
        {
          name: 'Felipe Nogs',
          job: 'Daily Reporter',
        }
      ]),
    };
  },
  renderRow: function (rowData) {
    return (
      <View style={styles.person}>
        <Image
          source={{uri: 'cat.png'}}
          style={styles.avatar}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{rowData.name}</Text>
          <Text style={styles.job}>{rowData.job}</Text>
        </View>
      </View>
    );
  },
  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5EBEE',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#453A30',
  },
  person: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: 'row',
  },
  avatar: {
    width: 64,
    height: 64,
  },
  details: {
    marginTop: 5,
    marginLeft: 15,
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
    color: '#453A30',
    fontSize: 20,
    marginBottom: 5,
  },
  job: {
    color: '#666',
  },
  instructions: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 5,
  },
});

module.exports = PeopleList;
