import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,StatusBar,ImageBackground
} from "react-native";

import { Icon } from 'native-base';
import CountDown from 'react-native-countdown-component';

var DateDiff = require('date-diff')
class LikesTab extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            time_rem:'',
           
        }
    }
componentWillMount(){
    var date1 = new Date(2019, 1, 9); // 2015-12-1
    var date2 = new Date(); // 2014-01-1
    var diff = new DateDiff(date1, date2);
    diff.seconds(); // ===> 60393600
    this.setState({time_rem:diff.seconds()})
}
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/StoriesHeaderThumbnails/5.jpeg')} style={{width: '100%', height: '100%'}}>
                <CountDown
                timeToShow={['D', 'H', 'M', 'S']}
        until={this.state.time_rem}
        onFinish={() => alert('Function Is Already Over ! Now You Can Uninstall The App')}
        onPress={() => alert('hello')}
        size={20}
        style = {{paddingTop : 320}}
      />
      <Text style={{textShadowColor:'#f50057',fontSize:16,
        fontWeight:'bold',
        fontSize: 20,
        color:'#f50057',
        textAlign:'center',}}>No of days to go.....!</Text>
      </ImageBackground>
            </View>
        );
    }
}
export default LikesTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});