import React, { Component } from 'react';
import styled from 'styled-components';
import FileItemTools from './FileItemTools';
import FileItemEditMode from './FileItemEditMode';
class FileItem extends Component {
  state = {
    editMode: false
  }

  toggleMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
  }
  render() {
    const { fileName, fileDescription, fileId } = this.props;
    const { editMode } = this.state;
    return (
      editMode ? <FileItemEditMode name={fileName} description={fileDescription} fileId={fileId} onEditDone={this.toggleMode} />
        :
        <FileItemContainer>
          <span style={{ fontWeight: '600' }}>{fileName}</span>
          <p>{fileDescription}</p>
          <FileItemTools onToggleMode={this.toggleMode} fileId={fileId} />
        </FileItemContainer>
    )
  }
}

const FileItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width:500px;
  border: 1px solid #ccc;
  padding: 2% 3%;
  &:not(:first-of-type){
    margin-top:1%;
  }
`;
export default FileItem;