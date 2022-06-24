
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';

const films = [
  {
    id: 1,
    title: "Jurassic Park",
    synopsys: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    actors: "Jeff Goldblum"
  },
  {
    id: 2,
    title: "Kill Bill vol.1",
    synopsys: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    actors: "Uma Thurman"
  },
  {
    id: 3,
    title: "Parasite",
    synopsys: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    actors: "Song Kang-ho"
  },
  {
    id: 4,
    title: "Avengers",
    synopsys: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    actors: "Robert Downey Jr."
  },
]


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>  
      <Movies films={films}/>
  
    </div>
  );
}

export default App;
