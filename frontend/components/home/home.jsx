import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from '../welcome/welcome_container';
import SidebarContainer from '../sidebar/sidebar_container';
import SideMenuContainer from '../sidemenu/side_menu_container';

const Home = ({currentUser, logout}) => (
  <div className="home-container">
    <SidebarContainer />
    <SideMenuContainer />
    <div className="workspace-container">
      <h1>Welcome to your workspace, {currentUser.username}!</h1>
      <WelcomeContainer />
    </div>
  </div>
);

export default Home;
