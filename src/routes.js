import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from '~/pages/Main';
import Repository from '~/pages/Repository';
import Detalhes from '~/pages/Detalhes';

const Route = createMaterialBottomTabNavigator(
  {
    Repository: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Repositorios',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'logo-github'} />
          </View>
        ),
      },
    },
    Favorities: {
      screen: Repository,
      navigationOptions: {
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-star'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Repository',
    activeColor: '#f0edf6',
    inactiveColor: '#8e44ad',
    barStyle: {backgroundColor: '#444'},
  },
);

const Routes = createStackNavigator({
  Home: {
    screen: Route,
    navigationOptions: {
      headerTransparent: 'true',
    },
  },
  Detalhes: {
    screen: Detalhes,

    navigationOptions: {
      headerTitle: 'Detalhes',
    },
  },
});

export default createAppContainer(Routes);
