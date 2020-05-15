import React from 'react';
import { Text, View, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox, Title } from 'react-native-paper';
import {TextInput, Avatar, Button, Card, Paragraph } from 'react-native-paper';
import Firebase from './Config';
import { database } from 'firebase';


class AddMovies extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        loading: false,
        movies: [],
        text: ''
      };
    }
    
   
    componentDidMount() {
      
      
  
  }
   
  
    render() {
      return (
       
        <ScrollView style={styles.scrollView}>
  <TextInput
        label='Email'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
  
          {/* {this.state.movies.map(movie => (
              
              <Moviedetails
                key={movie.id}
                id={movie.id}
                name={movie.actor}
                title={movie.title}
              />
            ))} */}
  
  </ScrollView>
       
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
    },
    item: {
      backgroundColor: '#3c6a89',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 20,
      borderRadius: 20,
    },
    item2: {
      backgroundColor: '#3c6a89',
      borderRadius: 20,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    
    scrollView: {
      backgroundColor: '#003f5c',
     
      
    },
  
    txt: {
      fontSize: 32,
      color:'#ffffff',
    },
  });
  const theme = {
    
    roundness: 2,
    colors: {
      
      primary: '#ffffff',
      background: '#ffffff',
    },
  };
  const theme2 = {
    backgroundColor: '#ffffff',
    roundness: 2,
    colors: {
      background: '#3c6a89',
     
    },
  };



  export default AddMovies