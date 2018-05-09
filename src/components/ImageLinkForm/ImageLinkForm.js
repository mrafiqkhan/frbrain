import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3'>{'This Magic Brain will detect face in your pictures. Get it a try'}</p>
      <div className='center'>
        <div className='form center pa4 br3 w-70'>
          <input type='text' className='f4 pa2 w-70 center' placeholder='Select and Image' />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;