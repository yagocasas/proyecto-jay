import './App.scss';
import Characters from './components/Characters';
import { Routes, Route} from "react-router-dom";
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='characters' element={<Characters/>}/>
        <Route path='characters/:name' element={<CharacterDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
