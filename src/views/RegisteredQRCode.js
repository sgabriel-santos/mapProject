import React from 'react';
import {Text, View, FlatList, Pressable } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import {styles} from '../styles/RegisteredQRCodeStyles'
import {getItems, clearItems} from '../services/LocalMemoryData' 

export default class RegisteredQRCode extends Component{
  state = {
    registers: []
  }

  constructor(props){
    super(props);
    
    let items = this.getData()
    items.then(registers => this.setState({registers}))
  }

  async getData(){
    try{
      let items = await getItems()
      return items
    }
    catch (e){
      console.log('error ', e)
    }
  }

  clearItemsFromMemory = () => {
    clearItems().then(() => this.setState({registers: []}))
  }

  render(){
    return (
      <View style={styles.container}>
        <Pressable style={styles.buttonRegister} onPress={() => this.clearItemsFromMemory()}>
          <Text style={styles.clearText}>Clear</Text>
        </Pressable>
        {this.state.registers &&
          <FlatList
            data={this.state.registers}
            renderItem={
              ({item}) =>
                <View style={styles.containerItems}>
                    <Text style={styles.cardData}>{item.name}</Text>
                    <Text style={styles.cardDate}>{item.date}</Text>
                </View>
            }
          />
        }
      </View>
    );
  }
}
