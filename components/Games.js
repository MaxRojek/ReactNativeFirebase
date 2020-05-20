import React from 'react';
import { Text, View, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox, Icon, Item } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import Firebase from './Config';


function Games(props) {
  return (
    <>
    
    <SafeAreaView style={styles.container}>
    
      <MyComponent usname={props.usname}/>
    </SafeAreaView>
  
  </>
  );
}



class MyComponent extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
      username:this.props.usname,
      games:[],
    };
  }
  
  
  
  

  componentDidMount() {

    const path = '/user/' + this.props.usname + '/Games';
 
    var query = Firebase.database().ref(path);
    query
      .once('value')
      .then(snapshot => {
        const games= [];

        snapshot.forEach(childSnapshot => {
          const item = childSnapshot.val();
         
          item.key = childSnapshot.key;
          // console.log(item)
          games.push({
            title: item.title,
            uri: item.uri,
            year: item.year,
            description: item.description,
            rate: item.rateing,
          });
        });

        this.setState({games});
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
      <List.Item
    // onPress={() => Actions.AddMovies({username: this.state.username})}
    style={{backgroundColor:'#3c6a89',}}
    onPress={() => Actions.NewGame({username: this.props.usname })}
    title={<Text style={{color:'white'}}> New Game </Text>}
    
    left={props => <List.Icon   {...props} icon="playlist-plus"  />}
  />
      
      <ScrollView style={styles.scrollView}>
      
     

 {this.state.games.map((item, index) => (
            <GameDetails
              key={index}
              title={item.title}
              image={item.uri}
              date={item.year}
              description={item.description}
              rate={item.rate}
             // more={() => this.moreDetails(item.title, item.year)} //tutaj edit
            />
          ))}

<GameDetails
              key='1'
              title='cos'
            description="description"
              date='cos'
              rate='cos'
             // more={() => this.moreDetails(item.title, item.year)} //tutaj edit
            />
      </ScrollView>
      
      
      
      
      </>
    );
  }
}

function GameDetails(props){
  return (

    <Card style={styles.item2} >
    <Card.Title
      title={props.title}
      subtitle={props.date}
      left={props => (
        <IconButton icon="gamepad-variant" color={'black'} size={30} />
      )}
    />

    <Card.Content>
    <Title>Card title</Title>
      <Paragraph>{props.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: props.image }} />
    <Card.Actions>
      
    <Button
        style={{backgroundColor: '#003f5c', marginVertical: 10}}
        color={'white'}
        mode="Contained "
        //onPress={props.more}
        >
        Edit
      </Button>
      
    </Card.Actions>
  </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  item2: {
    flex: 1,
    backgroundColor: '#3c6a89',
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 0.2,
    
  },
  item: {
    backgroundColor: '#fb5b5a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
});
const theme = {
  
  roundness: 2,
  colors: {
    
    primary: '#fb5b5a',
    
  },
};


export default Games;