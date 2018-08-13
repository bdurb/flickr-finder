import React from 'react';
import { withRouter } from 'react-router-dom';

import './LargePhoto.css';

const LargePhoto = (props) => {
  return (
    <div className='lp'>
      <div className='lp-buttons'>
      <button onClick={() => {props.history.push('/photos')}}>Back to Results</button>
      <button onClick={() => {props.history.push('/')}}>Search Again</button>
      </div>
      <img
        className='lp-image'
        src={`https://farm${props.location.state.farm}.staticflickr.com/${props.location.state.server}/${props.location.state.id}_${props.location.state.secret}_b.jpg`}
        alt="photos"
      />
    </div>        
  );
}
 
export default withRouter(LargePhoto);