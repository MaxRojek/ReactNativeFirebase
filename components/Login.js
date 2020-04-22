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
//import {db} from './Config';
// class Test extends React.Component {
//   static propTypes = {
//     items: propTypes.array.isRequired,
//   };
//   render() {
//     return (
//       <View style={styles.itemsList}>
//         {this.props.items.map((item, index) => {
//           return (
//             <View key={index}>
//               <Text style={styles.itemtext}>{item.name}</Text>
//             </View>
//           );
//         })}
//       </View>
//     );
//   }
// }

export default class Login extends React.Component {
  state = {
    names: [],
    userName: '',
    email: '',
    password: '',
    items: [],
  };

  componentDidMount() {
    // db.ref('/-M4Pv6pizOAXrU4S7Lbj/users/user').on('value', querySnapShot => {
    //   let data = querySnapShot.val() ? querySnapShot.val() : {};
    //   let name = data;
    //
    // });
    //
    //
    // const obj = this.state.names;
    // db.ref('/-M4Pv6pizOAXrU4S7Lbj/users/user').push({
    //   obj,
    // });
    // itemsRef.on('value', SnapShot => {
    //   let data = SnapShot.val();
    //   let items = Object.values(data);
    //   this.setState({items});
    // });
    // for (let i = 0; i < this.state.items.length; i++) {
    //   this.state.number + i;
    // }
    // this.setState({number: this.state.items.length});
  }

  goToDetails = () => {
    let useremail = this.state.email;
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      Firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          console.log(res);

          Alert.alert('User logged-in successfully!');
          this.setState({
            email: '',
            password: '',
          });
          //this.props.navigation.navigate('Dashboard')
          Actions.Details({usname: res.user.displayName});
        })
        .catch(error => Alert.alert('Failed to login'));
    }

    //Actions.Details({usname: this.state.email});
  };

  goToSignIn = () => {
    Actions.SignIn();
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
        <TouchableOpacity style={styles.loginBtn} onPress={this.goToDetails}>
          <Text style={styles.loginText}>Login</Text>
          {/* <Text>{this.state.items[0].name}</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.goToSignIn}>
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableOpacity>
        {/* {this.state.items.length > 0 ? (
          <Test items={this.state.items} />
        ) : (
          <Text>no items </Text>
        )} */}
      </View>
    );
  }
}

const theme = {
  roundness: 2,

  colors: {
    primary: '#fb5b5a',
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
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
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
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
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
