//*** fichier App.js ***
import { Route, Routes } from 'react-router-dom';
import App from "./Latout"
import './App.css';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="./Layout" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="./About" element={<About />} />
      </Routes>
    </div >
  );
}
export default App;
