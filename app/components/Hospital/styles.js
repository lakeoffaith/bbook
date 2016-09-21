import {
  StyleSheet,
  Dimensions
}from 'react-native';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height:Dimensions.get('window').height-84
  },
  block:{
    width:30,
    height:20,
    borderRadius:5,
    borderWidth:0.2,
    justifyContent:'center',
    alignItems:'center',
    marginRight:5,
    marginTop:5,
    backgroundColor:Accent
  }
})
