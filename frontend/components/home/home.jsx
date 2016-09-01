import React from 'react';
import { Link } from 'react-router';

const Home = ({currentUser, logout}) => (
  <div>
    <h1>Welcome home, {currentUser.username}!</h1>
  </div>
);

export default Home;
