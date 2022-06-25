
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Cart from './components/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [movieNumber,setMovieNumber] = useState(0);

  const films = [
    {
      id: 1,
      title: "Jurassic Park",
      synopsys: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      actors: "Jeff Goldblum",
      image: "https://flxt.tmsimg.com/assets/p14812_p_v11_ba.jpg"
    },
    {
      id: 2,
      title: "Kill Bill vol.1",
      synopsys: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
      actors: "Uma Thurman",
      image: "https://www.mascom.rs/files/products/2020/februar/killbill1_1581260750.jpg"
    },
    {
      id: 3,
      title: "Parasite",
      synopsys: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      actors: "Song Kang-ho",
      image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
    },
    {
      id: 4,
      title: "Avengers",
      synopsys: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      actors: "Robert Downey Jr.",
      image: "https://m.media-amazon.com/images/I/61x2DJQY90L._AC_SY550_.jpg"
    },
  ]

  function addMovie() {
    setMovieNumber(movieNumber + 1);
  }


  return (
    <BrowserRouter className="App">
      <NavBar movieNumber={movieNumber}></NavBar>
      <Routes>
        <Route path="/" element = { <Movies films={films} addToCart={addMovie}/> }/>
        <Route path="/iznajmi" element = {<Cart films={films}/>}/>
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
