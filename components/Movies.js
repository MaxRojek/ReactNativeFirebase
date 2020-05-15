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
      loading: false,
      movies: [],
    };
  }
  
 
  componentDidMount() {
    
    const path = '/user/' + this.props.username + '/Movies' ;
    // + MOvies
    // Firebase.database().ref(path).once('value', function(snapshot) {
    //   let moviesList = [];
    //   snapshot.forEach(function(childSnapshot) {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();
        
    //     moviesList.push(childKey)
    //   });
    //   //console.log(moviesList)
    //   moviesList1=moviesList
    
    //   console.log("tab2 "+ moviesList1[0]) 
    // });
    
    // console.log("tab111 "+ moviesList1[0])
    // // this.setState({
    // //   expanded: !this.state.expanded
    // // });
  
  
//     var query = Firebase.database().ref(path);
// query.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
      
//       var key = childSnapshot.key;
    
//       var childData = childSnapshot.val();
//       //console.log(childData)
//       moviesList1.push(key)
      
//   });
//   this.setState({ movies: moviesList1 });
// });
  
var query = Firebase.database().ref(path);
query.once("value")
      .then(snapshot => {
        const movies = [];

        snapshot.forEach(childSnapshot => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
           // console.log(item)
          movies.push({
            id: item.id,
            title: item.title,
            actor: item.person,
           
          });
        });
//console.log("filmy "+movies)
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
    onPress={() => Actions.AddMovies()}
    style={{backgroundColor:'#3c6a89',}}
    title="Add movie"
    description=""
    left={props => <List.Icon   {...props} icon="playlist-plus"  />}
  />

        {this.state.movies.map(movie => (
            
            <Moviedetails
              key={movie.id}
              id={movie.id}
              name={movie.actor}
              title={movie.title}
            />
          ))}

</ScrollView>
     
    );
  }
}
const LeftContent = props => <Avatar.Icon theme={theme} {...props} icon="folder" />

function Moviedetails(props) {
  return (
//  <List.Accordion
      
//       theme={theme}
//       style={styles.item}
//       title={props.title}
//       left={props => <List.Icon {...props} icon="more" />}
//     >
//       <List.Item style={styles.item2} title={props.name} right={props => <Text> Główna rola</Text>} />
     
//   <List.Item style={styles.item2} title={props.name} right={props => <Text> id filmu</Text>} />
     
//     </List.Accordion> 

  
<Card style={styles.item2} theme={theme}>
<Card.Title title={props.title} subtitle={props.name} left={LeftContent} />
<Card.Content>
  <Title>Card title</Title>
  <Paragraph>{props.name}</Paragraph>
</Card.Content>
<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
<Card.Actions>
  <Button theme={theme}>Cancel</Button>
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

export default Movies;