import React from 'react';
import { Text, View, StyleSheet,SafeAreaView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox, Title, Icon, Item } from 'react-native-paper';

// function Greeting(props) {
//   return (
//     <View style={styles.center}>
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// }

function Books(props) {
  return (
    <>
    
    <SafeAreaView style={styles.container}>
    
      <MyComponent usname={props.usname}/>
    </SafeAreaView>
  
  </>
  );
}



class MyComponent extends React.Component {
  state = {
    expanded: true,
    username:this.props.usname,
  }

 

  render() {
    return (
      <>
      <List.Item
    // onPress={() => Actions.AddMovies({username: this.state.username})}
    style={{backgroundColor:'#3c6a89',}}
    onPress={() => Actions.NewBook({username: this.props.usname })}
    title={<Text style={{color:'white'}}> New Book </Text>}
    
    left={props => <List.Icon   {...props} icon="playlist-plus"  />}
  />
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
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


export default Books;