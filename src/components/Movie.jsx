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
  ];
  const listItems = films.map((el) => {
    return (
      <div className="row">
        <div className="col s12 m5">
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
        </div>
      </div>
    );
  });
  return <div className="container ">{listItems}</div>;
}

function Movie() {
  return (
    <div className="movie card">
      <Films />
    </div>
  );
}

export { Movie };
