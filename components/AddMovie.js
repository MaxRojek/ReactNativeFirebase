import React from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Title} from 'react-native-paper';
import {
  Avatar,
  Button,
  Card,
  Paragraph,
  IconButton,
  Colors,
} from 'react-native-paper';
import Modal from 'react-native-modalbox';
//import Slider from 'react-native-slider';
import Firebase from './Config';
import {database} from 'firebase';

var screen = Dimensions.get('window');
class AddMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedMovietitle: '',
      pickedMovieyear: '',
      pickedMovieimage: '',
      pickedMovierate: '',
      modalVisible: false,
      username: this.props.username,
      loading: false,
      movies: [],
      movieTitle: '',
      swipeToClose: true,
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

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

  sendMovie = () => {
    const path = '/user/' + this.props.username + '/Movies';
    Firebase.database()
      .ref(path)
      .push({
        title: this.state.pickedMovietitle,
        year: this.state.pickedMovieyear,
        uri: this.state.pickedMovieimage,
        rateing: this.state.pickedMovierate,
      });
    //this.setModalVisible(false);
    this.refs.modal1.close();
  };

  addToFirebase = (movie, year, poster) => {
    this.setState({pickedMovietitle: movie});
    this.setState({pickedMovieimage: poster});
    this.setState({pickedMovieyear: year});
    this.refs.modal1.open();
    //this.setModalVisible(true);
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View
            style={{flex: 1, flexDirection: 'row', backgroundColor: '#465881'}}>
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
              // onPress={() => this.refs.modal1.open()}
            />
          </View>
          <View>
            {this.state.movies.map((item, index) => (
              <Moviedetails
                key={index}
                title={item.Title}
                image={item.Poster}
                date={item.Year}
                add={() =>
                  this.addToFirebase(item.Title, item.Year, item.Poster)
                }
              />
            ))}
          </View>
        </ScrollView>

        <Modal
          style={[styles.modal, styles.modal1]}
          ref={'modal1'}
          swipeToClose={this.state.swipeToClose}>
          <Text style={styles.text}>
            Oceń film + {this.state.pickedMovietitle}
          </Text>
          <Button
            title="close"
            onPress={() => this.refs.modal1.close()}
            style={styles.btn}
          />
        </Modal>
      </>
    );
  }
}

const LeftContent = props => (
  <Avatar.Icon theme={theme} {...props} icon="folder" />
);

function Moviedetails(props) {
  return (
    <Card style={styles.item2} theme={theme}>
      <Card.Title
        title={props.title}
        subtitle={props.date}
        left={LeftContent}
      />
      <Card.Content>
        {/* <Title>Tytuł</Title>
    <Paragraph>Paragraf</Paragraph> */}
      </Card.Content>
      <Card.Cover
        style={{width: 340, height: 400}}
        source={{uri: props.image}}
      />
      <Card.Actions>
        <IconButton
          icon="plus-box"
          color="white"
          size={40}
          onPress={props.add}
        />
      </Card.Actions>
    </Card>
  );
}

///////////////////////////////////////////////////////////////////tutaj są style
const {width, height} = Dimensions.get('window');
const cols = 3,
  rows = 3;

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
    flex: 1,
    flexDirection: 'row',
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
    color: 'white',
  },
  loginText: {
    color: 'white',
  },
  /////////////// style odo modala

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
  roundness: 2,
  colors: {
    primary: '#ffffff',
    background: '#ffffff',
  },
};

export default AddMovies;
