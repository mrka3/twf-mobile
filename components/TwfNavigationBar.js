import * as React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroupList from './GroupList'

const styles = StyleSheet.create({
  userImage: {
    borderRadius: 60,
    height: 120,
    marginBottom: 10,
    width: 120,
  }
})

function GroupScreen() {
  return (
      <GroupList></GroupList>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Image 
          style={styles.userImage}
          source={{uri:"https://sun9-6.userapi.com/impf/c854024/v854024784/12e190/KBJugplXF_Q.jpg?size=960x1280&quality=96&sign=0685c518494777363e9a11f0f580321a&type=album"}} 
          />
        </View>
        <Text>ДАУН БРЕЙКЕР</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

class TwfNavigationBar extends React.Component {
  render() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Groups') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Groups" component={GroupScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }
}

export default TwfNavigationBar;