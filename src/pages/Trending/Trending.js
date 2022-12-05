import axios from 'axios';
import React from 'react';
import styles from './Trending.module.css';
import { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination'
const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      setContent(data.results)
      
    };
    fetchTrending();
  },[page]);


 return (
  <div>
    <span className={styles.pageTitle}>Trending</span>
    <div className={styles.Trending}>
      {
        content && content.map((item) => {
          // console.log(item)
          const {id, media_type, title, name, poster_path, release_date, first_air_date, original_language, vote_average, overview } = item;
          
          return <SingleContent key={item.id} 
          id={id}
          media_type={media_type}
          title={title || name}
          poster={poster_path}
          date={release_date || first_air_date}
          language={original_language}
          rating={Math.round(vote_average)}
          overview={overview}
          />
        })
      }
    </div>
    <CustomPagination setPage={setPage} />
  </div>
  
)};


export default Trending;
