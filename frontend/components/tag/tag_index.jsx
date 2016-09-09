import React from 'react';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);

    this.displayTaggedNotes = this.displayTaggedNotes.bind(this);
  }

  displayTaggedNotes(tag) {
    this.props.fetchTaggedNotes(tag);
  }

  tagNames() {
    return this.props.tags.map((tag, idx) => (
      <li key={tag.name + idx}>
        <div className="notebook-list-item" onClick={ this.displayTaggedNotes.bind(null, tag) }>
          <div className="notebook-title">
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
      <div className="tag-index-container">
        <div className="header-container">
          <h2>Tags</h2>
        </div>
        <ul className="sidemenu-index">
          {this.tagNames()}
        </ul>
      </div>
    );
  }
};

export default TagIndex;