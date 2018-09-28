import React, { Component } from 'react';
import styled from 'styled-components';
import { uploadToS3, MAX_FILE_SIZE, submitNewFileDetails } from '../utils/AWS';
import Error from './Error';
import Success from './Success';
import Loading from './Loading';
class NewFile extends Component {
  constructor(props) {
    super(props);
    this.file = null;
  }
  state = {
    name: '',
    description: '',
    error: null,
    success: null,
    loading: false
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: null, success: null });
  }

  handleFileChange = (e) => {
    this.file = e.target.files[0];
    if (this.file.size > MAX_FILE_SIZE) {
      this.setState({ error: `The file size has to be less than ${MAX_FILE_SIZE / 1000000} MB` });
    }
    this.setState({ error: null, success: null });
  }
  handleFileUpload = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    if (this.file) {
      this.setState({ loading: true });
      uploadToS3(this.file).then((key) => {
        submitNewFileDetails({ name, description, fileId: key }).then(() => {
          this.setState({ success: 'File Uploaded successfully', name: '', description: '', error: '', loading: false });
          this.file = null;
        }).catch((error) => {
          this.setState({ error: 'Something went wrong:(', loading: false })
        })
      });
    } else {
      this.setState({ error: 'No file to upload' });
      return;
    }

  }
  render() {
    const { name, description, error, success, loading } = this.state;
    return (
      <div class="row">
        <NewFileForm>
          {error && <Error message={error} />}
          {success && <Success message={success} />}
          {loading && <Loading />}
          <input type='file' onChange={this.handleFileChange} />
          <input type="text" placeholder="file name" name="name" value={name} onChange={this.handleInputChange} />
          <textarea placeholder="File description" name='description' value={description} onChange={this.handleInputChange}></textarea>
          <button className="btn" style={{ maxWidth: '200px' }} onClick={this.handleFileUpload}>Upload</button>
        </NewFileForm>
      </div>
    )
  }
}

const NewFileForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width:600px;
  margin: 3% auto;
  justify-content:'space-between';
  *:not(:first-child){
    margin-top:1%;
  }
  border: 1px solid #ccc;
  padding: 2% 3%;
`

export default NewFile;