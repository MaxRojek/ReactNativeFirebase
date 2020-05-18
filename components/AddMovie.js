import React from 'react';
import {Dimensions, Text, View, StyleSheet,SafeAreaView, ScrollView,TextInput,TouchableOpacity, Image, Modal, TouchableHighlight } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {  Title } from 'react-native-paper';
import { Avatar, Button, Card, Paragraph,IconButton, Colors  } from 'react-native-paper';

import Firebase from './Config';
import { database } from 'firebase';


class AddMovies extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
       
        pickedMovietitle:'',
        pickedMovieyear:'',
        pickedMovieimage:'',
        pickedMovierate:'',
        modalVisible: false,
       username: this.props.username,
        loading: false,
        movies: [],
        movieTitle: ''
      };
    }
    
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
   
    fetchfromImdb = () => {
      const url =
        'http://www.omdbapi.com/?apikey=15fe2365&s=title&plot=full&type=movie';
      let link = url.replace('title', this.state.movieTitle);
      return fetch(link)
        .then(response => response.json())
        .then(responseData => {
          
          this.setState({movies: responseData.Search});
          
         
        })
        .catch(error => this.setState({error}));
    };

    
    sendMovie = () =>{
      const path = '/user/' + this.props.username + '/Movies' ; 
      Firebase.database().ref(path).push({
      
            title: this.state.pickedMovietitle,
             year: this.state.pickedMovieyear,
             uri: this.state.pickedMovieimage,
            rateing :this.state.pickedMovierate
       });
       this.setModalVisible(false);
    }
    
    
    addToFirebase = (movie,year,poster) =>{
      this.setState({ pickedMovietitle: movie})
      this.setState({pickedMovieimage: poster})
      this.setState({pickedMovieyear: year})
      
      this.setModalVisible(true);
      
      
      

      
     
    }

    
    
    render() {
      const { modalVisible } = this.state;
      return (
  <ScrollView style={styles.scrollView}>
   <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#465881'}}> 
  
 <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Movie title"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({movieTitle: text})}
          />
        
        </View>
        <IconButton
         
         icon="search-web"
         color={'white'}
         size={35}
         onPress={this.fetchfromImdb}
       />
        </View>
        <View>
             
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
         
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
        <Text style={styles.modalText}>Oceń film {this.state.pickedMovie}</Text>
        <TextInput
            style={styles.inputText}
            placeholder="rating"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({pickedMovierate: text})}
          />
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.sendMovie();
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>    https://reactnativeexample.com/wrapper-component-that-extends-the-react-native-modal-component/ */}
           
           {this.state.movies.map((item, index) => (
              
              <Moviedetails
                key={index}
                title={item.Title}
                image={item.Poster}
               
                date={item.Year}
               add={() => this.addToFirebase(item.Title, item.Year, item.Poster)}
              />
            ))} 
   </View>
  </ScrollView>
       
      );
    }
  }

  const LeftContent = props => <Avatar.Icon theme={theme} {...props} icon="folder" />

  function Moviedetails(props) {
    return (
  
    
  <Card style={styles.item2} theme={theme}>
  <Card.Title title={props.title} subtitle={props.date} left={LeftContent} />
  <Card.Content>
    {/* <Title>Tytuł</Title>
    <Paragraph>Paragraf</Paragraph> */}
    
  </Card.Content>
  <Card.Cover style={{width: 340, height: 400}} source={{ uri: props.image }} />
  <Card.Actions>
    <IconButton
    icon="plus-box"
    color="white"
    size={40}
    onPress={props.add}
  />
  </Card.Actions>
  </Card>
    
  
      )
  
  }





  ///////////////////////////////////////////////////////////////////tutaj są style
  const { width, height } = Dimensions.get('window');
  const cols = 3, rows = 3;

  const styles = StyleSheet.create({
    inputText: {
      height: 50,
      color: 'white',
    },
    
    item2: {
      backgroundColor: '#3c6a89',
      borderRadius: 10,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    
    inputView: {
      width: '90%',
      backgroundColor: '#465881',
      borderRadius: 25,
      height: 50,
      
      
      padding: 20,
      flex: 1, flexDirection: 'row'
    },
    inputText: {
      height: 40,
      color: 'white',
      width: '90%',
    },
    forgot: {
      color: 'white',
      fontSize: 11,
    },
    scrollView: {
      backgroundColor: '#003f5c',
     
      
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#3c6a89',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: 10,
      color: 'white'
    },
    loginText:{
      color:'white'
        },
/////////////// style odo modala
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 10,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 10,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}

  });
  
  const theme = {
  
    roundness: 2,
    colors: {
      
      primary: '#ffffff',
      background: '#ffffff',
    },
  };


  export default AddMovies