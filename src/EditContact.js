import React, {Component} from 'react';

function UserGreeting(props) {
    return <a>Edit</a>;
  }
  
  function GuestGreeting(props) {
  return <a style={{display:'none'}}></a>;
  }

function Greeting(props) {
    const isLoggedIn = '';
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  export default Greeting;