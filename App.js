import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={
            [
              { name: 'Robert Downey', character: 'Ironman' },
              { name: 'Chris Evans', character: 'Captain America' },
              { name: 'Joaquin Phoenix', character: 'Joker' },
              { name: 'Chris Hemsworth', character: 'Thor' },
              { name: 'Scarlett Johannson', character: 'Black Widow' },
              { name: 'Hayley Atwell', character: 'Peggy Carter' },
            ]
          }
          renderItem={({ item }) => <Text style={styles.color}>{item.name} : {item.character}</Text>} />
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  color: {
    color: 'black',
    fontSize:20
  }
})