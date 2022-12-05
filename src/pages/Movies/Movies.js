import axios from 'axios';
import React from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import styles from './Movies.module.css';
import { useState } from 'react';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState(10)

  React.useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)
      setContent(data.results);
      setNumOfPages(500);
    }
    fetchMovies();
  
  }, [page])
  return (
    <>
      <span className={styles.title}>Movies</span>
      <div className={styles.Movies}>
      {
        content && content.map((item) => {
          return (
            <SingleContent 
            key={item.id} 
            title={item.title}
            id={item.id}
            date={item.release_date}
            poster={item.poster_path}
            rating={item.vote_average}
            />
          )
        })
      }
      
    </div>
    <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </>
    
  );
};


export default Movies;
