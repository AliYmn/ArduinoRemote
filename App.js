import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import Main from './Components';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image source={{ uri: 'https://i.ibb.co/R9vkJ1N/logo.png' }} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
      </View>)
    return (
      <React.Fragment>
        {this.state.isVisible === true ?
          <View style={styles.MainContainer}>
            {
              (this.state.isVisible === true) ? Splash_Screen : null
            }
          </View>
          : null}
        {(this.state.isVisible === true) ? Splash_Screen : <Main />}
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
  });