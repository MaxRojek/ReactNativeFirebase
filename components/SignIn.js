import React, {useReducer} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Avatar} from 'react-native-paper';
import Firebase from './Config';
import {db} from './Config';

export default class Signin extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
  };

  createInDB = (name) =>
  {
    const path = '/user/'
    
    let endpoint = path.concat(name);
    let Movies = ['movie'];
    let Games = ["game"];
    let Books = ['book']
    let Series = ['series'];
    Firebase.database().ref(endpoint).set({
      Movies, Games, Books, Series
     });
  }
  
  
  register = () => {
    let Email = this.state.email;
    let Name = this.state.name;
    let Password = this.state.password;
    
    if (Email === '' && Password === '') {
    } else {
      
      Firebase.auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then(res => {
          res.user.updateProfile({
            displayName: Name,
          });
          console.log('User registered successfully!');
          Alert.alert('User registered successfully!')
          Actions.Details({usname: Name});
        })
        .catch(error => this.setState({errorMessage: error.message}));
    }
    this.createInDB(Name)
  };
  render() {
    return (
      <View style={styles.container}>
        <Avatar.Icon
          size={110}
          style={styles.icon}
          theme={theme}
          icon="account"
        />

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text2 => this.setState({password: text2})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={text3 => this.setState({name: text3})}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={this.register}>
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const theme = {
  roundness: 2,

  colors: {
    primary: '#3c6a89',
    accent: '#f1c40f',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#3c6a89',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#3c6a89',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    
  },
  icon: {
    marginBottom: 20,
  },
});
