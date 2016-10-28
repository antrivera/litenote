import React from 'react';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);

    this.displayTaggedNotes = this.displayTaggedNotes.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
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

  deleteTag(tag) {
    this.props.deleteTag(tag);
  }

  tagNames() {
    return this.props.tags.map((tag, idx) => (
      <li key={tag.name + idx}>
        <div className="tag-list-item">
          <div className="tag-index-item" onClick={ this.displayTaggedNotes.bind(null, tag) }>
            {tag.name}
          </div>
          <div className="tag-item-btns">
            <button className="delete-btn sidebar-btn" onClick={ this.deleteTag.bind(null, tag) }></button>
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
