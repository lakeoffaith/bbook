import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	imageContainer: {
		marginTop:5,
    flexDirection:'row',
    justifyContent:'center'
	},
  image:{
    width:200,
    height:200
  },
  tipContainer:{
    position:'absolute',
    left:0,
    bottom:0,
    height:30,
    opacity:0.1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  tipItemContainer:{
    width:60,
    flexDirection:'row',
    backgroundColor:'black',
    height:30
  }

});
