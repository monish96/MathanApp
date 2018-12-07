import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

let todate = new Date().toDateString();


class CardComponent extends Component {

    
   

    render() {

        const images = {

            "4": require('../assets/feed_images/1.jpeg'),
            "2": require('../assets/feed_images/2.jpeg'),
            "3": require('../assets/feed_images/3.jpeg')
        }


        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpeg')} />
                        <Body>
                            <Text>Praveena Mathan </Text>
                            <Text note>{todate}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 300, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Praveena Mathan </Text>
                            The Lord has blessed us with a new child. Please help us celebrate this joyous occasion.

<Text >God made all above, and We’re happy to say there’s a baby on the way!</Text>

<Text>Thank the Heavens! There’s a new tot joining our lot.</Text>

<Text>The stork is flying our way!

Twinkle, Twinkle! It’s time for a Sprinkle</Text>
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});