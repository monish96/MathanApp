import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Platform,
    StatusBar
} from "react-native";

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../CardComponent'
import EntypoIcon from 'react-native-vector-icons/Entypo';

class HomeTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
             <Header style={[styles.androidHeader]}>
                    <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>
                 
                    <Body style={[styles.androidHeaderTitle]}><Text>Praveen Mathan</Text></Body>

                    <Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
                </Header>
                <Content>

                    <View style={{ height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                            <View style={{ flexDirection: 'row', 'alignItems': 'center' }}>
                                <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
                                <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}

                            >
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/1.jpeg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/2.jpeg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/3.jpeg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/4.jpeg')} />

                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/5.jpeg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/6.jpeg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/7.jpeg')} />
                                 <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/8.jpeg')} />
                                     <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/9.jpeg')} />
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource="4" likes="1000" />
                    <CardComponent imageSource="2" likes="1231" />
                    <CardComponent imageSource="3" likes="3301" />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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