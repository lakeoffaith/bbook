import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
	imageContainer: {
		marginTop:5,
    flexDirection:'row',
    justifyContent:'center'
	},
  image:{
    width:Dimensions.get('window').width,
    height:240
  },
  tipContainer:{
    position:'absolute',
    left:0,
    bottom:0,
    height:30,
    opacity:0.8,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  tipItemContainer:{
    width:120,
    flexDirection:'row',
		alignItems:'center',
		backgroundColor:'gray',
    height:30
  },
	titleContainer:{
		flexDirection:'row',
		padding:5,
		alignItems:'center',
		marginTop:10,
		marginBottom:10,
		marginLeft:10
	},
	priceContainer:{
		marginLeft:10,
		flexDirection:'row',
		alignItems:'center'
	},
	picdocContainer:{
		flexDirection:'row',
		alignItems:'center',
		height:30,
		borderTopWidth:0.8,
		borderBottomWidth:0.8,
		marginLeft:10
	}
});
