import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav'
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import TvSeries from './pages/TvSeries/TvSeries';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path='/' element={<Trending />} exact/>
            <Route path='/Movies' element={<Movies />} />
            <Route path='/tvseries' element={<TvSeries />} />
            <Route path='/Search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
    
  );
}

export default App;
