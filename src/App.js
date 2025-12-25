import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import properties from "./data/properties.json";
import SearchPage from "./pages/SearchPage";

function App() {

  console.log(properties);

  return(
    <Router>
      <h1>Estate Agent App</h1>

      <SearchPage></SearchPage>

      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/property/:id" element={<PropertyPage/>} />
      </Routes>
    </Router>


  );
}

export default App;
