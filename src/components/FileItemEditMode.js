import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFileDeatil } from '../actions/Files';
class FileItemEditMode extends Component {
  state = {
    description: '',
    name: ''
  }

  componentDidMount() {
    const { description, name } = this.props;
    this.setState({ description, name })
  }
  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onEditDone = () => {
    const { fileId } = this.props;
    const { name, description } = this.state;
    this.props.updateFileDeatil({ fileId, description, name });
    this.props.onEditDone();
  }
  render() {
    const { description, name } = this.state;
    return (
      <div>
        <input value={name} placeholder="file name" name="name" onChange={this.onInputChange} />
        <textarea value={description} placeholder='File description(Optional)' name="description" onChange={this.onInputChange}></textarea>
        <button onClick={this.onEditDone}>Done!</button>
      </div>
    )
  }
}

export default connect(null, { updateFileDeatil })(FileItemEditMode);