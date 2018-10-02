import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFile } from '../actions/Files';
import Error from './Error';
class FileItemTools extends Component {
  state = {
    isDeleting: false,
    error: null,
  }
  onDelete = () => {
    const answer = window.confirm('Are you sure you want to delete this file?');
    if (answer) {
      this.setState({ isDeleting: true });
      this.props.deleteFile({ fileId: this.props.fileId }).then(() => {
        this.setState({ isDeleting: false, error: null });
      }).catch((error) => {
        console.log(error);
        this.setState({ error: error.message || 'Something went wrong :( ', isDeleting: false });
      })
    } else {
      return;
    }
  }
  render() {
    const { isDeleting, error } = this.state;
    return (
      <div>
        <button onClick={this.props.onToggleMode}>Edit</button>
        <button onClick={this.onDelete}>{isDeleting ? 'Deleting...' : 'X'}</button>
        {error && <Error message={error} />}
      </div>
    )
  }
}
export default connect(null, { deleteFile })(FileItemTools);