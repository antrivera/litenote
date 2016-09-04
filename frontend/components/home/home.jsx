import React from 'react';
import { Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

const Home = ({currentUser, logout}) => (
  <div className="home-container">
    <SidebarContainer />
    <div className="workspace-container">
      <h1>Welcome to your workspace, {currentUser.username}!</h1>
    </div>
  </div>
);

export default Home;
