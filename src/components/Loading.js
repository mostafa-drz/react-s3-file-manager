import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
const Loading = () => (
  <div style={{ position: 'absolute', top: 0, left: '0', zIndex: '1000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
    <ClipLoader
      sizeUnit={"px"}
      size={150}
      color={'#123abc'}
      loading={true}
    />
  </div>
);

export default Loading;