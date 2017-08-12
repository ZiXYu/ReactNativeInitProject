
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import CustomHeader from '../components/Header';


class HomeContainer extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
        <CustomHeader name="Homepage" />
        <Text>Welcome to React Native</Text>
      </View>
    );
  }
}


export default HomeContainer;
