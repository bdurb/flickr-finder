import React from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './Photo';
import './Photos.css';

const Photos = (props) => {
  return (
    <div className='photos'>
      <h1 style={{textAlign: 'center'}}>Your Search Results</h1>
      <button onClick={() => {props.history.push('/')}}>Search Again</button>
      {props.results.map(photo => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </div>
  );
}
 
export default withRouter(Photos);