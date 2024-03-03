import "./App.css";
import "./CSS/style.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import MovieList from "./APIData/movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          MovieList.map((element)=>{
            return(
              <Movie
              image={element.Poster}
              title={element.Title}
              year={element.Year}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
