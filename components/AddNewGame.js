import React from 'react';
import { Text, View, StyleSheet,SafeAreaView, TextInput, Picker, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { List, Checkbox, Title, Icon, Item } from 'react-native-paper';
import Firebase from './Config';


export default class NewGame extends React.Component {
   
    state = {
        expanded: true,
        username:this.props.usname,
        games:[],
        title:'',
        year:'',
        uri:'',
        rateing:'',
        description:''
      }
      addToFirebase = () => {
        const path = '/user/' + this.props.username + '/Games';
        Firebase.database()
          .ref(path)
          .push({
            title: this.state.title,
            year: this.state.year,
            uri: this.state.uri,
            rateing: this.state.rateing,
            description: this.state.description
          });
        
      };
   
   
    render() {
        return(
            <SafeAreaView style={styles.container}>
 <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="title"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({title: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="year"
            placeholderTextColor="#003f5c"
            onChangeText={text1 => this.setState({year: text1})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="uri to image"
            placeholderTextColor="#003f5c"
            onChangeText={text3 => this.setState({uri: text3})}
          />
        </View>
        <View style={styles.MainContainer}>
         <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"Add description"}
            placeholderTextColor={"#003f5c"}
            numberOfLines={10}
            multiline={true}
            onChangeText={text2 => this.setState({description: text2})}
          />
 
        </View>


        <View style={styles.MainContainer2}>
                <Text style={styles.inputText2}>Rate movie</Text>  
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.rateing}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({rateing: itemValue,})}  
                    >  
                    <Picker.Item label="1" value="1" />  
                    <Picker.Item label="2" value="2" />  
                    <Picker.Item label="3" value="3" />  
                </Picker>  
                
                </View>

           
        <TouchableOpacity style={styles.loginBtn} onPress={this.addToFirebase} >
          <Text style={styles.loginText}>Add new Game</Text>
        </TouchableOpacity>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputView: {
        width: '80%',
        backgroundColor: '#3c6a89',
        borderRadius: 5,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        marginTop: 10,
        
      },
      inputText2: {
        height: 20,
        color: 'white',
      },
      inputText: {
        height: 50,
        color: 'white',
      },
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
      loginText: {
        height: 30,
        fontSize: 20,
        
        color: 'white',
      },
      MainContainer :{
        justifyContent: 'center',
        marginTop:10,
        width: '80%',
          
       
        },
        MainContainer2 :{
            justifyContent: 'center',
            marginTop:10,
            width: '100%',
            alignItems: 'center',
            borderRadius: 5,
            },
        TextInputStyleClass:{
       
          //textAlign: 'center',
         
          color: 'white',
          padding: 20,
          borderRadius: 10 ,
          backgroundColor : "#3c6a89",
          height: 190,
         
          },
          pickerStyle:{  
            borderRadius: 5,
               borderRadius: 5,
            backgroundColor : "#3c6a89",
            width: '80%',  
            color: 'white',  
            
        }  
  });