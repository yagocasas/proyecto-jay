import "./App.scss";
import Characters from "./components/Characters";
import { Routes, Route, useNavigate } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkSession } from "./redux/auth/auth.actions";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthRoute from "./components/componentes/authRoute";
import NewCharacter from "./components/componentes/EditCharacters/NewCharacter/NewCharacter";
import AuthAdmin from "./components/componentes/authAdmin";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate))
  }, []);

  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters />}/>
          <Route path="/characters/:name" element={<AuthRoute component= {<CharacterDetails />}/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/newCharacter" element={<AuthAdmin component={<NewCharacter/>}/>}/>
        </Routes>
    </div>
  );
}

export default App;
