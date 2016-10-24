import React from 'react';

class TagDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownDisplay: "closed"
    };

    this.toggleDropDownDisplay = this.toggleDropDownDisplay.bind(this);
  }

  toggleDropDownDisplay(e) {
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
    return this.props.activeNote.tags.map( tag => (
      <li className="tag-index-item" key={tag.id + tag.title}>{tag.name}</li>
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
                <input type="text" id="tag-input" placeholder="Tag your note"></input>
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
