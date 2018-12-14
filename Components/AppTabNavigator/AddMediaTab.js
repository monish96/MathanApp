import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,TextInput,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import { Icon } from 'native-base';
import { Container} from 'native-base';
import firebase from 'firebase'
class AddMediaTab extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mail:'',
            phone:'',
            count:''
        }
    }
    componentWillMount(){

        var config = {
            apiKey: "AIzaSyC_5-hLEHsMUXsmFxtTcqdCQ6zFeVaNrgo",
      authDomain: "mathanapp-62abf.firebaseapp.com",
      databaseURL: "https://mathanapp-62abf.firebaseio.com",
      projectId: "mathanapp-62abf",
      storageBucket: "mathanapp-62abf.appspot.com",
      messagingSenderId: "759376390332"
          };
          if(!firebase.apps.length){
            firebase.initializeApp(config);
        }
    }
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color: tintColor }} />
        )
    }
   
      handleEmail = (text) => {
        this.setState({ mail: text })
     }
     handleMobile = (text) => {
        this.setState({ phone: text })
     }
     handleCount = (text) => {
        this.setState({ count: text })
     }
     submitname(){
    
        
        
            firebase.database().ref('user/'+this.state.mail).set({
              email:this.state.mail,
              phoneNo:this.state.phone,
              count:this.state.count
            }).then(()=>{
                alert("Thanks "+this.state.mail+" We are eagerly waiting for your presence")
                this.setState({mail:'',phone:'',count:''})
                console.log('success');}).catch((error)=>{
              console.log(error);
            })
        
          
       
        
     }
    render() {
        return (
            <Container>
                <ImageBackground source={require('../../assets/StoriesHeaderThumbnails/4.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
          <Text style={{textShadowColor:'#f50057',fontSize:16,
        fontWeight:'bold',
        fontSize: 20,
        color:'#f50057',
        textAlign:'center',}}>Please Let Us Know</Text>
          <Text style={{textShadowColor:'#f50057',fontSize:16,
        fontWeight:'bold',
        fontSize: 20,
        color:'#f50057',
        textAlign:'center',}}>Whether You Are Attending ?</Text>
          <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Your Name"
            placeholderTextColor = "#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            value={this.state.mail}
            onChangeText = {this.handleEmail}
            
            />
        <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor = "#ffffff"
            value={this.state.phone}
            onChangeText = {this.handleMobile}
            
            />  
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Number Of Members Going To attend"
            keyboardType="phone-pad"
            placeholderTextColor = "#ffffff"
            value={this.state.count}
            onChangeText = {this.handleCount}
            /> 
         <TouchableOpacity style={styles.button} onPress={()=>  this.submitname()}>
           <Text style={styles.buttonText}>Submit</Text>
         </TouchableOpacity>  
         
          </View>
  </ImageBackground>
                
            </Container>
        );
    }
}
export default AddMediaTab;

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
      },
    
      inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
      },
      button: {
        width:300,
        backgroundColor:'#ff80ab',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13,
          backgroundColor: 'rgba(52, 52, 52, 0.8)'
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
        
      }, backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

});