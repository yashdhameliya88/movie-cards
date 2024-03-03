import "./App.css";
import "./CSS/style.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

export default App;
