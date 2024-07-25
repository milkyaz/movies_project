import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=9affed6f&s=Forrest Gump`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  //функция которую можно спустить вниз и которая обновляет state
  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=9affed6f&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        {/* передали функцию вниз к компоненту Search */}
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}

export { Main };
