import React from 'react';
import NotebookIndex from '../notebook/notebook_index';
import { Link, hashHistory } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.fetchAllNotebooks = this.fetchAllNotebooks.bind(this);
  }

  fetchAllNotebooks() {
    this.props.fetchAllNotebooks();
  }

  logoutAndRedirect(logout) {
    this.props.logout();
    hashHistory.push('/');
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <h3> LN </h3>

          <div className="sidebar-btn-group">
            <button className="sidebar-btn" id="note-btn"></button>
            <button className="sidebar-btn" id="notebook-btn" onClick={this.fetchAllNotebooks}></button>
            <button className="sidebar-btn" id="logout-btn" onClick={this.logoutAndRedirect}></button>
          </div>
        </div>

        <div className="side-menu-container">
          <NotebookIndex notebooks={this.props.notebooks} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
