import { useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList";
import Search from "./component/Search";

function App() {
  const [searchV, setsearchV] = useState("");
  const [newRate, setnewRate] = useState(1);
  const [movies, setMovies] = useState([
    {
      Title: "The Amazing Spider-Man",
      Poster:
        "https://fr.web.img6.acsta.net/medias/nmedia/18/83/19/35/20158079.jpg",
      Description: " un film de super-héros en 3-D réalisé par Marc Webb",
      Rate: 5,
      Time: "2h 16m",
      Genre: "Action",
    },
    {
      Title: "Superman Returns",
      Poster:
        "https://i2.wp.com/www.filmspourenfants.net/wp-content/uploads/2018/07/superman-returns-a.jpg?fit=555%2C751&ssl=1",
      Description:
        "un film américain réalisé par Bryan Singer et sorti en 2006.",
      Rate: 4,
      Time: "2h 34m",
      Genre: "Action",
    },
    {
      Title: "The Batman",
      Poster:
        "https://www.boxofficepro.com/wp-content/uploads/2022/01/thebatman-775x970-copy-479x600.png",
      Description: "un film américain de super-héros réalisé par Matt Reeves ",
      Rate: 3,
      Time: "2h 55m",
      Genre: "Action",
    },
    {
      Title: "Titanic",
      Poster:
        "https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg",
      Description:
        " un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997.",
      Rate: 2,
      Time: "3h 14m",
      Genre: "Romance",
    },
    {
      Title: "Premier Contact",
      Poster:
        "https://fr.web.img4.acsta.net/pictures/16/10/24/15/52/414639.jpg",
      Description:
        "un film de science-fiction américain réalisé par Denis Villeneuve, sorti en 2016",
      Rate: 1,
      Time: " 1h 56m",
      Genre: "Action",
    },
  ]);
  const search = (Text) => {
    setsearchV(Text);
  };
  const setRate = (Rate) => {
    setnewRate(Rate);
  };
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };
  return (
    <div className="App">
      <div>
        <Search search={search} setRate={setRate} newRate={newRate} />
      </div>
      <div className="movies">
        <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (el) =>
              el.Rate >= newRate &&
              el.Title.toUpperCase().includes(searchV.toUpperCase().trim())
          )}
        />
      </div>
    </div>
  );
}

export default App;
