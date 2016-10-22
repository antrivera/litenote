import React from 'react';
import { Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import Workspace from '../workspace/workspace';

const Home = ({
  currentUser,
  logout,
  createNote,
  updateNote,
  activeState,
  editorState,
  defaultNotebook,
  setContentState,
  notebooks
}) => (
  <div className="home-container">
    <SidebarContainer />
    <Workspace currentUser={currentUser}
      createNote={createNote}
      updateNote={updateNote}
      setContentState={setContentState}
      activeState={activeState}
      notebooks={notebooks}
      defaultNotebook={defaultNotebook}
      editorState={editorState} />
  </div>
);

export default Home;
