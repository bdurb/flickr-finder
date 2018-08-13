import React from 'react';
import { Link } from 'react-router-dom';

import './Photo.css';


const Photo = (props) => {
  return (
    <div className='photo-list'>
      <Link style={{textDecoration: 'none', color: 'black'}} to={{
        pathname:'/large-photo',
        state: props.photo
        }}>
        <img
        className='photo-img'
        src={`https://farm${props.photo.farm}.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}_t.jpg`}
        alt="photos"
        /><br/>
        {props.photo.title}
      </Link>
    </div>
  );
}
 
export default Photo;