import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from '../Icon';

import * as cssSetting from '../../constants/cssSetting';

const styles = require('./defaultStyle');

const noop: any = () => {
};

class CustomHeader extends Component {
  static defauultProps = {
    name: '',
    leftIcon: '',
    rightIcon: '',
    leftIconClick: noop,
    rightIconClick: noop,
  }

  leftButton = () => {
    const { leftIcon, leftIconClick } = this.props;

    if (leftIcon !== '') {
      return (
          <TouchableOpacity onPress={leftIconClick}>
            <Icon name={leftIcon} color={cssSetting.iconActiveColor} size={18} />
          </TouchableOpacity>
      );
    }
  };

  rightButton = () => {
    const { rightIcon, rightIconClick } = this.props;

    if (rightIcon !== '') {
      return (
          <TouchableOpacity onPress={rightIconClick}>
            <Icon name={rightIcon} color={cssSetting.iconActiveColor} size={18} />
          </TouchableOpacity>
      );
    }
  }

  render() {
    const { name } = this.props;
    return (
      <View style={styles.headerView}>
        <View style={styles.iconView}>
          {this.leftButton()}
        </View>
        <View style={styles.textView}>
          <Text style={styles.textTitle}>{name}</Text>
        </View>
        <View style={styles.iconView}>
          {this.rightButton()}
        </View>
      </View>
    );
  }
}

export default CustomHeader;
