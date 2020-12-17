import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import InstaFriendsScreen from './components/InstaFriendsScreen';
import DMListScreen from './components/DMListScreen';
import ChattingScreen from './components/ChattingScreen';
import UserSettingScreen from './components/UserSettingScreen'
//   <Route exact path="/" component={InstaFriendsScreen}/>
//<Route exact path="/about" component={DMListScreen}/>


export default function App() {
  return (
    <Wrapper>
      {' '}
      {/*Wrapper components are components that surround unknown components and provide a default structure to display the child components.*/}
      <Router>
      <Route component={InstaFriendsScreen} exact path="/"/>
      <Route component={DMListScreen}  path="/dm"/>
      <Route component={ChattingScreen} path="/chat/:chatID"/>
      <Route component={UserSettingScreen} path="/setting"/>
      </Router>
     

    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
`;
