import React from 'react';
import NotebookContainer from '../notebook/notebook_container';

const SideMenu = ({currentUser}) => {



  return (
    <nav className="side-menu-container">
      <NotebookContainer />
    </nav>
  );
}
export default SideMenu;
