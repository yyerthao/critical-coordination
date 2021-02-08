import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
<<<<<<< HEAD
import portfolio from './portfolio.reducer';
import project from './project.reducer';
import admin from './admin.reducer';
import task from './task.reducer';

=======
import portfolio from './portfolio.reducer'
import admin from './admin.reducer'
import task from './task.reducer'
import projectReducer from './project.reducer'
>>>>>>> master
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  admin,
<<<<<<< HEAD
  portfolio,
  project,
  task, // contains a task
=======
  task,
  projectReducer, // contains a task
>>>>>>> master
});

export default rootReducer;
