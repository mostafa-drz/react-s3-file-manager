import React, { Component } from 'react';
import { getAllUserFiles } from '../actions/Files';
import { connect } from 'react-redux';
import Error from './Error';
import Loading from './Loading';
import FileItem from './FileItem';
class FilesList extends Component {
  componentDidMount() {
    this.props.getAllUserFiles();
  }
  render() {
    const { isFetchingFiles, files, error } = this.props;
    return (
      <div>
        {isFetchingFiles && <Loading />}
        {error && <Error message={error} />}
        <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginTop: '0' }}>Uploaded Files</h2>
        {files && <div>
          {files.map((file) => <FileItem {...file} />)}
        </div>}
      </div>
    )
  }
}

const mapStateToProps = ({ Files: { files, isFetchingFiles, error } }) => ({ files, isFetchingFiles, error });
export default connect(mapStateToProps, { getAllUserFiles })(FilesList);