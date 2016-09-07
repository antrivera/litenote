import React from 'react';
import { Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import Workspace from '../workspace/workspace';

const Home = ({currentUser, logout, createNote, activeState, editorState, setContentState}) => (
  <div className="home-container">
    <SidebarContainer />
    <Workspace currentUser={currentUser}
      createNote={createNote}
      setContentState={setContentState}
      activeState={activeState}
      editorState={editorState} />
  </div>
);

export default Home;
