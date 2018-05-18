import React from 'react';
import './faceRecognation.css';

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='center imageBox'>
    <div className='innerDiv absolute mt2'>
     <img id="inputImage" alt='' src={imageUrl} />
     <div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
     </div>
    </div>
  );
}

export default FaceRecognition;