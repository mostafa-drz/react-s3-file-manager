import React from 'react';
import styled from 'styled-components';
const FileItem = ({ name, description }) => (
  <FileItemContainer>
    <span style={{ fontWeight: '600' }}>{name}</span>
    <p>{description}</p>
  </FileItemContainer>
)

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