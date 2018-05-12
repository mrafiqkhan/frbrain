import React from 'react';
import './faceRecognation.css';

const FaceRecognition = ({imageUrl}) => {
  return (
    <div className='center imageBox'>
    <div className='innerDiv'>
     <img alt='' src={imageUrl} />
     </div>
    </div>
  );
}

export default FaceRecognition;