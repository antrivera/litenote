import React from 'react';

class TagDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownDisplay: "closed",
      tagName: ""
    };

    this.toggleDropDownDisplay = this.toggleDropDownDisplay.bind(this);
    this.updateTagName = this.updateTagName.bind(this);
    this.addTagToNote = this.addTagToNote.bind(this);
  }

  updateTagName(e) {
    this.setState({tagName: e.currentTarget.value});
  }

  addTagToNote(e) {
    if (e.keyCode === 13) {
      let existingNoteTags = this.props.activeNote.tags.map(tag => tag.name);
      let note = {
        id: this.props.activeNote.id,
        details: {
          tags: [...existingNoteTags, this.state.tagName]
        }
      };

      this.props.updateNote({note});
      this.setState({tagName: ""});
    }
  }

  toggleDropDownDisplay(e) {
    if (!this.props.activeNote) {
      return;
    }

    if (this.state.dropDownDisplay === "open" && e.target.id === "tag-input") {
      return;
    }
    let display = this.state.dropDownDisplay === "closed" ? "open" : "closed";
    this.setState({dropDownDisplay: display});
  }

  tagList() {
    if (!this.props.activeNote) {
      return null;
    }
    return this.props.activeNote.tags.map( (tag, idx) => (
      <li className="tag-index-item" key={idx + tag.id + tag.name}>{tag.name}</li>
    ));
  }

  render() {
    return(
      <div className="tag-select" onClick={ this.toggleDropDownDisplay }>
        <div className="tag-icon"></div>
        <div className="dropdown-icon"></div>
        <div className={`tag-dropdown ${this.state.dropDownDisplay}`}>
          <ul>
            <li>
              <div>
                <input type="text"
                  id="tag-input"
                  placeholder="Tag your note"
                  value={this.state.tagName}
                  onKeyDown={ this.addTagToNote }
                  onChange={ this.updateTagName }
                />
              </div>
            </li>
            {this.tagList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default TagDropdown;
