import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home';
import Teams from "./components/Navigation/Teams/Teams";
import SignUp from "./components/Navigation/SignUp/SignUp";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
