import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import styles from './TvSeries.module.css';

const TvSeries = () => {
  const [content, setContent] = useState([]);
  
  // useEffect(() => {
  //   const fetchTvSeries = async () => {
  //     const { data } = await axios.get(``)
  //     setContent(data.results);
  //   }
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <>
      <span>Tv Series</span>
      <div className={styles.TvSeries}>
        <SingleContent />
      </div>
    </>
 
  );
};


export default TvSeries;
