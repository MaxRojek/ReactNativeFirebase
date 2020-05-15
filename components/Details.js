import React from 'react';

import {Actions} from 'react-native-router-flux';
import {Title} from 'react-native-paper';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { List } from 'react-native-paper';

import {Avatar} from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'Filmy',
    icon: 'movie',
    component: 'Movies',
  },
  {
    id: '2',
    title: 'Seriale',
    icon: 'library-movie',
    component: 'Series',
  },
  {
    id: '3',
    title: 'Gry',
    icon: 'gamepad-variant',
    component: 'Games',
  },
  {
    id: '4',
    title: 'Książki',
    icon: 'book-open-page-variant',
    component: 'Books',
  },
];

function Item({title, icon, card, username}) {
  const Route = x => {
    if (x == 'Movies') {
      Actions.Movies({usname: username});
    }
    if (x == 'Games') {
      Actions.Games({usname: username});
    }
    if (x == 'Books') {
      Actions.Books({usname: username});
    }
    if (x == 'Series') {
      Actions.Series({usname: username});
    }
  };
  return (
    <TouchableOpacity style={styles.item} onPress={() => Route(card)}>
      <Avatar.Icon size={40} theme={theme} icon={icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default class Details extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Title>Welcome {this.props.usname} !</Title> */}
        <List.Item
        style={{backgroundColor:'#3c6a89',}}
    title={this.props.usname}
    description=""
    left={props => <List.Icon   {...props} icon="account-multiple-check"  />}
  />
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item title={item.title} icon={item.icon} card={item.component} username={this.props.usname } />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
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
  },
  item: {
    backgroundColor: '#3c6a89',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    color:'white'
  },
});
