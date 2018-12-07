import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,StatusBar,
} from "react-native";

import { Card, CardItem, Thumbnail,Header, Body, Left, Right, Button,Icon } from 'native-base'
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
                {/* <Header style={[styles.androidHeader]}>
                    <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>
                 
                    <Body style={[styles.androidHeaderTitle]}><Text>Praveen Mathan</Text></Body>

                    <Right><EntypoIcon name="back-in-time"style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
                </Header> */}
                
                <Card style={{ height: 300, width: null, flex: 1,paddingTop:10,}}>
                <CardItem cardBody>
                    <Image
                        style={{
                        resizeMode: "cover",
                        width: null,
                        paddingTop:50,
                        height: 400,
                        flex: 1,
                        flexDirection: 'row'
                        }}
                        source={cardImage}
                    />
                </CardItem>
                <CardItem cardBody style={{
                        paddingTop:20,
                        width: null,
                        height: 400,
                        flex: 1,
                        flexDirection: 'column'
                        }}>
                <Icon name="navigate" style={{ color: "#32db64" }} />
                <Text style={{ fontWeight: "900" }}>Location Details:</Text>
                <Text style={{ fontWeight: "900" }}></Text>
                <Text>Saliyar Mandapam</Text>
                <Text>Vadassery, Nagercoil.</Text>
                <Icon name="alarm" style={{ color: "green",paddingTop:20 }} />
                <Text style={{ fontWeight: "900" }}>Date & Time:</Text>
                <Text>Saturday, Feb 9th</Text>
                <Text>09:00 A.M Onwards</Text>
                </CardItem>
                <CardItem cardBody>
                <Icon name="ios-heart-outline" style={{ color: 'red' }} />
                <Text style={{ fontWeight: "900" }}>Please join us </Text>
                <Text style={{ fontWeight: "900" }}>in the wonderful occasion </Text>
                <Text></Text>
                </CardItem>
                
            </Card>
            </View>
        );
    }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },androidHeader: {
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