import React from 'react';
import { Text, View, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox, Title } from 'react-native-paper';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import Firebase from './Config';
import { database } from 'firebase';

function Movies(props) {
  return (
    <SafeAreaView style={styles.container}>
       {/* <Title>Welcome {props.usname} !</Title> */}
      <MyComponent username={props.usname}/>
    </SafeAreaView>
  );
}



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      username: this.props.username,
      loading: false,
      movies: [],
    };
  }
  
 
  componentDidMount() {
    
    const path = '/user/' + this.props.username + '/Movies' ;
    
var query = Firebase.database().ref(path);
query.once("value")
      .then(snapshot => {
        const movies = [];

        snapshot.forEach(childSnapshot => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
           // console.log(item)
          movies.push({
            title: item.title,
            uri: item.uri,
            year: item.year,
           
          });
        });

        this.setState({ movies });
       
      })
      .catch(error => {
        console.error(error);
      });

}
  
  
  
  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

_handleUpdate = () =>{

}



  render() {
    return (
     
      <ScrollView style={styles.scrollView}>
 <List.Item
    onPress={() => Actions.AddMovies({username: this.state.username})}
    style={{backgroundColor:'#3c6a89',}}
    title="Add Movie"
    description=""
    left={props => <List.Icon   {...props} icon="playlist-plus"  />}
  />

        {this.state.movies.map((item, index) => (
            
            <Moviedetails
            key={index}
            title={item.title}
            image={item.uri}
           
            date={item.year}
            />
          ))}







          

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
   
    <Button theme={theme}>Ok</Button>
  </Card.Actions>
  </Card>
  
  
    )

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
    borderRadius: 10,
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

export default Movies;