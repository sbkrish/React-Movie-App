import React from 'react';
import styles from './CustomPagination.module.css';
import { createTheme, Pagination, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    mode: "dark",
  }
});


const CustomPagination = ({setPage, numOfPages = 10}) => {
  const handlePageChange = (num) => {
    setPage(num);
    window.scroll(0,0);
  }

  return (
  <div className={styles.CustomPagination}>
    <ThemeProvider theme={theme}>
      <Pagination 
      count={numOfPages} 
      hideNextButton
      hidePrevButton
      onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </ThemeProvider>
  </div>
  );
};


export default CustomPagination;
