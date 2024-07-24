import React from "react";
function Films() {
  const films = [
    {
      Title: "Avatar",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      Year: "2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Shrek",
      Year: "2001",
      Runtime: "90 min",
      Genre: "Animation, Adventure, Comedy",
      Director: "Andrew Adamson, Vicky Jenson",
      Actors: "Mike Myers, Eddie Murphy, Cameron Diaz",
    },

    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

      Title: "The Godfather",
      Year: "1972",
      Runtime: "175 min",
      Genre: "Crime, Drama",
      Director: "Francis Ford Coppola",
      Actors: "Marlon Brando, Al Pacino, James Caan",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Title: "The Dark Knight",
      Year: "2008",
      Runtime: "152 min",
      Genre: "Action, Crime, Drama",
      Director: "Christopher Nolan",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Title: "Pulp Fiction",
      Year: "1994",
      Runtime: "154 min",
      Genre: "Crime, Drama",
      Director: "Quentin Tarantino",
      Actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
    },

    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Forrest Gump",
      Year: "1994",
      Runtime: "142 min",
      Genre: "Drama, Romance",
      Director: "Robert Zemeckis",
      Actors: "Tom Hanks, Robin Wright, Gary Sinise",
    },
  ];
  const listItems = films.map((el) => {
    return (
      <div className="card">
        <div className="card-content" key={el.id}>
          <div className="card-image">
            {" "}
            <img src={el.Poster} alt="" />
          </div>
          <p className="item__text">
            <span className="item__span-text">Title:</span>
            {el.Title}
          </p>
          <p className="item__text">
            <span className="item__span-text">Year:</span> {el.Year}
          </p>
          <p className="item__text">
            <span className="item__span-text">Runtime:</span> {el.Runtime}
          </p>
          <p className="item__text">
            <span className="item__span-text">Genre:</span> {el.Genre}
          </p>
          <p className="item__text">
            <span className="item__span-text">Director:</span> {el.Director}
          </p>
          <p className="item__text">
            <span className="item__span-text">Actors:</span> {el.Actors}
          </p>
        </div>
      </div>
    );
  });
  return <div className="container ">{listItems}</div>;
}

function Movie() {
  return (
    <div className="col s12">
      {" "}
      <Films />
    </div>
  );
}

export { Movie };
