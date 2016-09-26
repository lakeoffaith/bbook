import React,{Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles.js';
import {Icon} from 'react-native-material-design';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
export default class BookDetail extends Component{
  render(){
    return(
      <View>
          <View style={styles.imageContainer}>
              <Image source={require('../../img/book.jpg')} style={styles.image}/>
              <View style={styles.tipContainer}>
                  <View style={styles.tipItemContainer}><Text>9.8分/1000阅读量</Text></View>
              </View>
          </View>

          <View style={styles.titleContainer}>
             <Text style={{fontSize:18}}>Presto 技术内幕</Text>
          </View>
          <View style={styles.priceContainer}>
              <Icon name="attach-money" size={16}/>
             <Text style={{color:Accent}}>48.00</Text>
          </View>
          <View style={styles.picdocContainer}>
            <View style={{width:40}}><Icon name="attachment" size={16}/></View>
            <View style={{flex:1}}><Text>查看图文详情</Text></View>
            <View style={{width:40,justifyContent:'center'}}><Icon name="keyboard-arrow-right" size={16}/></View>
          </View>
      </View>
    );
  }
}
