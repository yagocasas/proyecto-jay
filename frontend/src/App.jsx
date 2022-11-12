import "./App.scss";
import Characters from "./components/Characters";
import { Routes, Route } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:name" element={<CharacterDetails />}/>
        </Routes>
    </div>
  );
}

export default App;
