//*** fichier App.js ***
import './App.css';
import Header from './Header.js';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <button
        className="App-button"
        onClick={event => alert(event.target.id)}>
        Modifier l’animation
      </button>
    </div>
  );
}
export default App;
