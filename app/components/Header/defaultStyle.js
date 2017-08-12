import React from 'react';
import { StyleSheet } from 'react-native';

const Platform = require('Platform');
// 判断机型检测
const headHeight = Platform.OS === 'android' ? { height: 45 } : { height: 65, paddingTop: 20 };

module.exports = StyleSheet.create({
  headerView: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#f3f3f3',
    ...headHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconView: {
    width: 20,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 17,
    color: '#424242',
  },
});
