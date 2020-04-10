import React from 'react';
import { Text, View, StyleSheet,SafeAreaView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox } from 'react-native-paper';

// function Greeting(props) {
//   return (
//     <View style={styles.center}>
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// }

function Series() {
  return (
    <SafeAreaView style={styles.container}>
      <MyComponent/>
    </SafeAreaView>
  );
}



class MyComponent extends React.Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <List.Section title="Seriale">
        <List.Accordion
      
          theme={theme}
          title="Film nr 1"
          left={props => <List.Icon {...props} icon="more" />}
        >
          <List.Item title="First item" right={props => <Text> napis</Text>} />
         
          <List.Item title="Second item" right={props => <Text> napis</Text>} />
         
        </List.Accordion>

        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="more" />}
        >
         <List.Item title="First item" right={props => <Text> napis</Text>} />
         
         <List.Item title="Second item" right={props => <Text> napis</Text>} />
        </List.Accordion>
      </List.Section>
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


export default Series;