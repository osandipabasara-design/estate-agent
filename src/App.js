import logo from './logo.svg';
import './App.css';
import properties from "./data/properties.json";
import SearchPage from "./pages/SearchPage";

function App() {
  console.log(properties);

  return (
    <div>
      <h1>Estate Agent App</h1>

      <SearchPage></SearchPage>
      
    </div>
  );
}

export default App;
