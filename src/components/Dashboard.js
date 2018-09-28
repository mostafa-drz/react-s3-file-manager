import React from 'react';
import NewFile from './NewFile';
import FilesList from './FilesList';
const Dashboard = () => {
  return (
    <div className="container">
      <NewFile />
      <FilesList />
    </div>
  );
}

export default Dashboard;