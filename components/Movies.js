import React from 'react';
import { Text, View, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox, Title } from 'react-native-paper';
import { Avatar, Button, Card, Paragraph,Badge } from 'react-native-paper';
import Firebase from './Config';
import { database } from 'firebase';
import Modal from 'react-native-modalbox';
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
           rate: item.rateing
          });
        });

        this.setState({ movies });
       
      })
      .catch(error => {
        console.error(error);
      });

}
  
  
  
  

handleDetails = () =>{
  console.log("alert")
  //this.refs.modal1.open();
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
            
           <>
            <Moviedetails
            key={index}
            title={item.title}
            image={item.uri}
           
            date={item.year}
            rate={item.rate}
            details={this.handleDetails}
            />
              
              <Modal
          style={[styles.modal, styles.modal1]}
          ref={'modal1'}
          swipeToClose={this.state.swipeToClose}>
          <Text style={styles.text}>
            Oceń film => 
          </Text>
          
         
          {/* <TouchableOpacity style={styles.loginBtn} onPress={this.refs.modal1.close()}>
          <Text style={{color:'white'}}>ok</Text>
        </TouchableOpacity> */}
        </Modal>            
</>
          ))}

</ScrollView>
     
    );
  }
}
const LeftContent = props => <Avatar.Icon theme={theme2} {...props} icon="dots-vertical" />

function Moviedetails(props) {
  
  const fields = [];
    for (let i=0; i < props.rate; i++) {
        // Try avoiding the use of index as a key, it has to be unique!
        fields.push(
          <Avatar.Icon size={25} theme={theme2} {...props} icon="star"></Avatar.Icon>
        );
    }
   

  
  return (
<Card style={styles.item2} theme={theme}>
  <Card.Title title={props.title} subtitle={props.date} left={props => <Button theme={theme3} icon="dots-vertical" mode="text" onPress={() => console.log('Pressed')}>
    
  </Button>} />
  <Card.Content>
    {/* <Title>Tytuł</Title>
    <Paragraph>Paragraf</Paragraph> */}
  </Card.Content>
  <Card.Cover style={{width: 330, height: 400}} source={{ uri: props.image }} />
  <Card.Actions>
  
  {fields}
  <Text style={styles.txt}>{props.rate}/5</Text>
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
    borderWidth: 0.5,
    alignItems: 'center',
    
  },
  
  scrollView: {
    backgroundColor: '#003f5c',
   
    
  },

  txt: {
    fontSize: 32,
    color:'#ffffff',
  },
  //////////////modal style 
  loginBtn: {
    width: '80%',
    backgroundColor: '#3c6a89',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    color: 'white',
  },

  wrapper: {
    paddingTop: 50,
    flex: 1,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003f5c',
  },

  btn: {
    margin: 10,
    backgroundColor: '#3c6a89',
    color: 'white',
    padding: 10,
  },

  btnModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
  },

  text: {
    color: 'white',
    fontSize: 22,
  },
});
const theme = {
  
  backgroundColor: '#ffffff',
  colors: {
    backgroundColor: '#ffffff',
    primary: '#ffffff',
    background: '#ffffff',
  },
};
const theme2 = {
  
  roundness: 2,
  colors: {
    primary: '#3c6a89',
    background: '#ffffff',
   
  },
};
const theme3 = {
  
  backgroundColor: '#ffffff',
  colors: {
    backgroundColor: '#ffffff',
    primary: '#ffffff',
    background: '#ffffff',
  
  },
};
export default Movies;