import React from 'react';
import styles from './SingleContent.module.css';
import { img_300, unavailable } from '../../config/config';
import { Badge } from '@mui/material';

const SingleContent = (props) => (
  <div className={styles.SingleContent} >
    <Badge badgeContent={Math.round(props.rating) !== 0 ? props.rating : "New"} color={Math.round(props.rating) === 0 ? "error" : props.rating > 6 ? "primary" : "secondary"} />
    <img className={styles.poster} src={props.poster ? `${img_300}/${props.poster}` : unavailable } alt={props.title}/>
    <span className={styles.title}>{props.title}</span>
    <span className={styles.date}>{props.media_type === "tv" ? "Tv Series" : "Movie"}
      <span>{props.date}</span>
    </span>
  </div>
);


export default SingleContent;
