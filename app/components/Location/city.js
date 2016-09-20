
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
}from 'react-native';
import {connect} from 'react-redux';
import {actions} from 'react-native-navigation-redux-helpers';
import {loadCityDataSource} from './actions';
import {bindActionCreators} from 'redux';
const {pushRoute,popRoute}=actions;
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor} from '../ijoyComponents/color'
import {CITYLISTURL} from '../../data/rap'
import DataRepository from '../../data/DataRepository';
const repository=new DataRepository();
class City  extends React.Component{
    static propTypes={
        provinceId:React.PropTypes.number.isRequired
    }
    _goDoctorList=()=>{
        const {dispatch,globalNavigation}=this.props;
        dispatch(popRoute(globalNavigation.key));
    }
    _getFetchCityList=()=>{
      const {actions}=this.props;
        repository._getFetch(CITYLISTURL)
        .then((responseData)=>{
             actions.loadCityDataSource(responseData.result);
        })
        .catch((error)=>{
          console.log(error);
        })
        .done();
    }
    componentDidMount(){
      if(this.props.cityList===null){
        this._getFetchCityList();
      }
    }
    render(){

        const cityList=this.props.cityList?cityList:null;
       return(
           <View>
               {cityList && cityList.length>0 &&  cityList.map(function(item,i){
                    return (
                      <TouchableOpacity onPress={this._goDoctorList}>
                         <View key={item.key} style={{height:50,marginLeft:20,borderBottomWidth:0.1,padding:10,alignItems:'center',flexDirection:'row'}}>
                             <Text style={{color:SecondText}}>{item.province}</Text>
                         </View>
                     </TouchableOpacity>
               );
               })}
           </View>
       );
    }
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({loadCityDataSource},dispatch),
    dispatch
  };
}

function mapStateToProps(state){
  return {
    globalNavigation:state.get('globalNavigation'),
    cityList:state.get('location').cityList
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(City);
