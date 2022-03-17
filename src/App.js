import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import './App.scss';
import Home from './components/Home/Home';
import Teams from "./components/Navigation/Teams/Teams";
import SignIn from "./components/Navigation/SignIn/SignIn";
import LogIn from "./components/Navigation/LogIn/LogIn";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
