import React from 'react';
import { Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import Workspace from '../workspace/workspace';

const Home = ({currentUser, logout}) => (
  <div className="home-container">
    <SidebarContainer />
    <Workspace currentUser={currentUser} />
  </div>
);

export default Home;
