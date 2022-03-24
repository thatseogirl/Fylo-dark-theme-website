import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home';
import Teams from "./components/Navigation/Teams/Teams";
import SignUp from "./components/Navigation/SignUp/SignUp";
import Navigation from "./components/Navigation/Navigation";
import Subscribe from "./components/Body/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    <Subscribe />
    <Footer />
    </div>
  );
}

export default App;
