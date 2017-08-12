import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import HomeContainer from '../containers/HomeContainer';
import Icon from '../components/Icon';

import * as cssSetting from '../constants/cssSetting';

const tabNavigator = TabNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart-9" size={20} color={tintColor} />
      ),
    },
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: cssSetting.iconActiveColor,
    inactiveTintColor: cssSetting.iconDefaultColor,
    labelStyle: {
      fontSize: 12,
      paddingBottom: 5,
    },
    tabStyle: {
      borderWidth: 1,
      borderColor: '#000',
    },
    style: {
      height: 50,
      backgroundColor: '#fff',
    },
  },
});


const App = StackNavigator({
  tab: {
    screen: tabNavigator,
    navigationOptions: {
      header: null,
    },
  }
});

export default App;