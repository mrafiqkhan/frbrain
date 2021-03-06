import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className='f3'>{'This Magic Brain will detect face in your pictures. Get it a try'}</p>
      <div className='center'>
        <div className='form center pa4 br3 w-70'>
          <input type='text' className='f4 pa2 w-70 center' placeholder='Select and Image' onChange={onInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;