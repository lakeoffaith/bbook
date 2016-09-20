import {connect} from 'react-redux';
const LOAD_PROVINCE_DATASOURCE='loadProvinceDataSource';
const LOAD_CITY_DATASOURCE='loadCityDataSource';
export function loadProvinceDataSource(lists){
  return {
    type:LOAD_PROVINCE_DATASOURCE,
    lists
  }
}

export function loadCityDataSource(lists){
  return{
    type:LOAD_CITY_DATASOURCE,
    lists
  }
}
