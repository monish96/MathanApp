import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform, StatusBar, ScrollView,ImageBackground
} from "react-native";
import { Container, Icon, Header, Left, Body, Right } from 'native-base'


import { Card, CardItem } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const cardImage = require("../../assets/StoriesHeaderThumbnails/3.jpeg");
class SearchTab extends Component {

    static navigationOptions = {
        header: null,

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={[styles.androidHeader]}>
                    <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>

                    <Body style={[styles.androidHeaderTitle]}><Text>Praveen Mathan</Text></Body>

                    <Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
                </Header>
                

                
                <ImageBackground source={require('../../assets/StoriesHeaderThumbnails/8.jpeg')} style={{width: '100%', height: '100%'}}>
                
                   
                        
                            <Card style={{width:414,paddingLeft:20,marginTop:240,backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                                <CardItem cardBody style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                                    <Icon name="navigate" style={{ color: "#32db64",paddingLeft:10, }} />
                                    <Text style={{ fontWeight: "900",color: '#ffffff',paddingLeft:10,}}>Location Details:</Text>
                                    <Text style={{ fontWeight: "900",color: '#ffffff' }}></Text>
                                    <Text style={{color: '#ffffff'}}>Saliyar Mandapam</Text>
                                    <Text style={{color: '#ffffff'}}>Vadassery, Nagercoil.</Text>
                                </CardItem>
                                <CardItem cardBody style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                                <Icon name="alarm" style={{ color: "green", paddingLeft: 10 }} />
                                    <Text style={{ fontWeight: "900",color: '#ffffff',paddingLeft:10, }}>Date & Time:</Text>
                                    <Text style={{color: '#ffffff'}}>Saturday, Feb 9th </Text>
                                    <Text style={{color: '#ffffff'}}>09:00 A.M Onwards</Text>
                                </CardItem>
                                <CardItem cardBody style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                                    <Icon name="ios-heart-outline" style={{ color: 'red',paddingLeft:10, }} />
                                    <Text style={{ fontWeight: "900",color: '#ffffff',paddingLeft:10, }}>Please join us </Text>
                                    <Text style={{ fontWeight: "900",color: '#ffffff' }}>in the wonderful occasion </Text>
                                    <Text></Text>
                                </CardItem>

                            </Card>
                       
                    
                    </ImageBackground>
                </View>
          

        );
    }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, androidHeader: {
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight,
                backgroundColor: 'white'
            }
        })
    },
    androidHeaderTitle: {
        ...Platform.select({
            android: {
                alignItems: 'flex-end'
            }
        })

    }
});