import React, { Component } from 'react'
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      marginBottom: 10,
      marginTop: 45,
    },
    indicatorTab: {
      backgroundColor: 'transparent',
    },
    scroll: {
      backgroundColor: '#FFF',
    },
    sceneContainer: {
      marginTop: 10,
    },
    socialIcon: {
      marginLeft: 14,
      marginRight: 14,
    },
    socialRow: {
      flexDirection: 'row',
    },
    tabBar: {
      backgroundColor: '#EEE',
    },
    tabContainer: {
      flex: 1,
      marginBottom: 12,
    },
    tabLabelNumber: {
      color: 'gray',
      fontSize: 12.5,
      textAlign: 'center',
    },
    tabLabelText: {
      color: 'black',
      fontSize: 22.5,
      fontWeight: '600',
      textAlign: 'center',
    },
    userBioRow: {
      marginLeft: 40,
      marginRight: 40,
    },
    userBioText: {
      color: 'gray',
      fontSize: 13.5,
      textAlign: 'center',
    },
    userImage: {
      borderRadius: 60,
      height: 120,
      marginBottom: 10,
      width: 120,
    },
    userNameRow: {
      marginBottom: 10,
    },
    userNameText: {
      color: '#5B5A5A',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 12,
    },
  })

export default class Profile extends Component {
    render(){
        return(
            <View style={styles.headerContainer}>
            <View style={styles.userRow}>
              <Image
                style={styles.userImage}
                source={{uri: "https://sun9-6.userapi.com/impf/c854024/v854024784/12e190/KBJugplXF_Q.jpg"}}
              />
              <View style={styles.userNameRow}>
                <Text style={styles.userNameText}>ДАУН</Text>
              </View>
              <View style={styles.userBioRow}>
                <Text style={styles.userBioText}>БРЕЙКЕР</Text>
              </View>
            </View>
            <View style={styles.socialRow}>
              <View>
                <Icon
                  size={30}
                  type="entypo"
                  color="#3B5A98"
                  name="facebook-with-circle"
                  onPress={() => console.log('facebook')}
                />
              </View>
              <View style={styles.socialIcon}>
                <Icon
                  size={30}
                  type="entypo"
                  color="#56ACEE"
                  name="twitter-with-circle"
                  onPress={() => console.log('twitter')}
                />
              </View>
              <View>
                <Icon
                  size={30}
                  type="entypo"
                  color="#DD4C39"
                  name="google--with-circle"
                  onPress={() => console.log('google')}
                />
              </View>
            </View>
          </View>
        )
      }
}

export default class SD extends Component {
    render(){
        return(
            <Text>СОси хуй</Text>
        )
      }
}