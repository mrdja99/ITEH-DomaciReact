
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Cart from './components/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Kontakt from './components/Kontakt';
import Utisci from './components/Utisci';
import Forma from './components/Forma';

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
    {
      id: 5,
      title: "Avatar",
      synopsys: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      actors: "Sam Worthington",
      image: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      amount: 0
    },
    {
      id: 6,
      title: "Zikina dinastija",
      synopsys: "Misa is already a teenager but with little interest in girls and much for his violin. Two granddads, Zika and Milan, are worried for their grandson who may 'deviate' like Steven from Dynasty, the show they like to watch. That's why they decide to introduce him better to their attractive housekeeper.",
      actors: "Dragomir Bojanic Gidra",
      image: "https://static.kupindoslike.com/Zikina-Dinastija-1_slika_O_71985693.jpg",
      amount: 0
    },
    {
      id: 7,
      title: "Joker",
      synopsys: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      actors: "Joaquin Phoenix",
      image: "https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
      amount: 0
    },
    {
      id: 8,
      title: "300",
      synopsys: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      actors: "Gerard Butler",
      image: "https://m.media-amazon.com/images/I/617ugvR0tOL._AC_SY741_.jpg",
      amount: 0
    }
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
        <Route path="/" element = { [<Movies films={films} addToCart={addMovie} />,<Forma />] }/>
        <Route path="/iznajmi" element = {<Cart films={cartFilms} removeFromCart={removeMovie}/>}/>
        <Route path="/kontakt" element = { <Utisci/> }/>
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
