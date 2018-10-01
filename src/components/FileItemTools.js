import React, { Component } from 'react';

class FileItemTools extends Component {

  onDelete = () => {

  }
  render() {
    return (
      <div>
        <button onClick={this.props.onToggleMode}>Edit</button>
        <button onClick={this.onDelete}>X</button>
      </div>
    )
  }
}
export default FileItemTools;