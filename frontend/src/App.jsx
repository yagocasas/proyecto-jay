import "./App.scss";
import Characters from "./components/Characters";
import { Routes, Route } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="characters/:name" element={<CharacterDetails />} />
        </Routes>
      </main>
      <footer>FOOOTER</footer>
    </div>
  );
}

export default App;
