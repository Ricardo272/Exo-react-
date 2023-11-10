//*** fichier App.js ***
import { useState } from 'react';
import './App.css';
import Home from './Home';

function Home({ animate }) {
  const [animation, setAnimation] = useState(true)
  const toggleAnimation = () => {
    console.log(animation)
    setAnimation(animation => !animation)
    console.log(animate)
  }
  return (
    <div className="App">
      <Home animate={animation} />
      <button
        className="App-button"
        onClick={toggleAnimation}>
        Modifier l’animation
      </button>
    </div>
  );
}
export default Home;
