
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Cart from './components/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [movieNumber,setMovieNumber] = useState(0);
  const [cartFilms,setCartFilms] = useState([]);
  const [films] = useState([
    {
      id: 1,
      title: "Jurassic Park",
      synopsys: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      actors: "Jeff Goldblum",
      image: "https://flxt.tmsimg.com/assets/p14812_p_v11_ba.jpg",
      amount: 0
    },
    {
      id: 2,
      title: "Kill Bill vol.1",
      synopsys: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
      actors: "Uma Thurman",
      image: "https://www.mascom.rs/files/products/2020/februar/killbill1_1581260750.jpg",
      amount: 0
    },
    {
      id: 3,
      title: "Parasite",
      synopsys: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      actors: "Song Kang-ho",
      image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      amount: 0
    },
    {
      id: 4,
      title: "Avengers",
      synopsys: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      actors: "Robert Downey Jr.",
      image: "https://m.media-amazon.com/images/I/61x2DJQY90L._AC_SY550_.jpg",
      amount: 0
    },
  ]);

  function refreshList(id) {
    let newFilms = films.filter((f) => f.amount > 0);
    setMovieNumber(newFilms.length);
    setCartFilms(newFilms);
  }

  function refreshList2() {
    let newFilms = films.filter((f) => f.amount === 0);
    setCartFilms(newFilms);
  }

  function addMovie(id) {
    
    films.forEach((f) => {
      if(f.id === id) {
        f.amount = 1;
      } 
    });
    refreshList(id);

  }

  function removeMovie(id) {
    setMovieNumber(movieNumber - 1);
    films.forEach((f) => {
      if(f.id === id && f.amount > 0) {
        f.amount = 0;
        
      }
    });
    refreshList();
    

  }


  return (
    <BrowserRouter className="App">
      <NavBar movieNumber={movieNumber}></NavBar>
      <Routes>
        <Route path="/" element = { <Movies films={films} addToCart={addMovie} /> }/>
        <Route path="/iznajmi" element = {<Cart films={cartFilms} removeFromCart={removeMovie}/>}/>
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
