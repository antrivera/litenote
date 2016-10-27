import React from 'react';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);

    this.displayTaggedNotes = this.displayTaggedNotes.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllTags();
  }

  componentDidMount() {
    document.addEventListener('click', this.closeTagDrawer(), false);
  }

  closeTagDrawer() {
    return e => {
      let tagDrawer = document.getElementsByClassName('tag-index-container')[0];
      if (this.props.className.includes("open")) {
        let tagBtn = document.getElementById('tag-btn');
        if (e.target !== tagBtn && !tagDrawer.contains(e.target)) {
          this.props.closeDrawer();
        }
      }
    }
  }

  displayTaggedNotes(tag) {
    this.props.fetchTaggedNotes(tag);
  }

  tagNames() {
    return this.props.tags.map((tag, idx) => (
      <li key={tag.name + idx}>
        <div className="notebook-list-item" onClick={ this.displayTaggedNotes.bind(null, tag) }>
          <div className="tag-name">
            {tag.name}
          </div>
          <div className="notebook-item-btns">
            <button className="delete-btn sidebar-btn"></button>
          </div>
        </div>
      </li>
    ));
  }

  render() {
    return(
      <div className={ this.props.className }>
        <div className="header-container">
          <h2>TAGS</h2>
        </div>
        <ul className="sidemenu-index">
          {this.tagNames()}
        </ul>
      </div>
    );
  }
};

export default TagIndex;
