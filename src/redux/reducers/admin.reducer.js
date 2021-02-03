import { combineReducers } from 'redux';


const allCompanyReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALLCOMPANY':
      return action.payload;
    default:
      return state;
  }
};
 
const allLocationReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALLLOCATION':
      return action.payload;
    default:
      return state;
  }
};

const statusCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STATUSCATEGORY':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default combineReducers({
  allCompanyReducer,
  allLocationReducer,
  statusCategoryReducer,
 });