import React from 'react';
import { connect } from 'react-redux';
const home = process.env.CLIENT_URL

const doStuff = (props) => {
  props.dispatch({type: 'LOGOUT'});
  window.location.href = `${home}/#/login`;
}




const LogOutButton = (props) => (
  <button
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    className={props.className}
    onClick={() => doStuff(props)}
  >
    Log Out
  </button>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
