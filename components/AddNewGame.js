import React from 'react';
import { Text, View, StyleSheet,SafeAreaView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox, Title, Icon, Item } from 'react-native-paper';



export default class NewGame extends React.Component {
   
    state = {
        expanded: true,
        username:this.props.usname,
        games:[],
      }
   
   
   
    render() {
        return(
            <SafeAreaView style={styles.container}>

        <Text>{this.props.username}</Text>
           
           
           
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
    },
    
  });