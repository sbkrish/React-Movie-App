import axios from 'axios';
import React from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import styles from './Movies.module.css';
import { useState } from 'react';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import Genres from '../../components/Genres';

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState(10);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)
      setContent(data.results);
      setNumOfPages(data.total_pages > 500 ? 500 : data.total_pages);
    }
    fetchMovies();
  
  }, [page]);

  
  return (
    <>
      <span className={styles.title}>Movies</span>
      <div className={styles.genres}>
        <Genres 
        type="movie" 
        />  
      </div>
      
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
