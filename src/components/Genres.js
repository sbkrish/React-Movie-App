import React from 'react';
import { Chip, Stack} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const handleClick = () => {
  console.log("fine")
};


const Genres = ({type}) => {
  const [content, setContent] = useState([]);

  React.useEffect( () => {
    const fetchGenres = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      setContent(data.genres);
    }
    fetchGenres();
    
  },[])

  return (
    <div className="genres">
      <Stack direction="row" spacing={0.3}>
          {
            content && content.map((item) => {
              return <Chip label={item.name} onClick={handleClick} key={item.id} />;
            })
          }
          
      </Stack>
    </div>
  )
};


export default Genres;
