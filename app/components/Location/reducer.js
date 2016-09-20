import {
  LOAD_PROVINCE_DATASOURCE
} from './actions';

export default function location(state = {
  lists:null
}, action) {
  switch(action.type) {
    case "loadProvinceDataSource":
      return {
        lists:action.lists
      };
      case "loadCityDataSource":
        return {
          cityList:action.lists
        };
    default:
      return state;
  }
}
