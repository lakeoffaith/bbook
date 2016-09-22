import React,{Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles.js';
export default class BookDetail extends Component{
  render(){
    return(
      <View>
          <View style={styles.imageContainer}>
              <Image source={require('../../img/book.jpg')} style={styles.image}/>
              <View style={styles.tipContainer}>
                  <View style={styles.tipItemContainer}><Text>评分的区域</Text></View>
                  <View style={styles.tipItemContainer}><Text>已经出售的区域</Text></View>
              </View>
          </View>
      </View>
    );
  }
}
