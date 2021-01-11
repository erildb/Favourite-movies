import React from "react";
import { connect } from "react-redux";
import {
  fetchMovies,
  addFavouriteMovie,
  removeFavouriteMovie,
} from "../../actions";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.addToFavourites = this.addToFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies("action");
  }

  addToFavourites(movie) {
    this.props.addFavouriteMovie(movie);
  }

  removeFromFavourites(movie) {
    this.props.removeFavouriteMovie(movie.id);
  }

  renderButton(movie) {
    const isFavourite = this.props.favouriteMovies.includes(movie);
    const buttonType = isFavourite ? "grey" : "green";
    const buttonText = isFavourite
      ? "Add to Favourites"
      : "Remove from Favourites";
    const actionType = isFavourite
      ? this.removeFromFavourites
      : this.addToFavourites;

    return (
      <button
        onClick={() => actionType(movie)}
        className={`ui ${buttonType} right floated button`}
      >
        {buttonText}
        <i className="right heart icon"></i>
      </button>
    );
  }

  renderList() {
    if (!this.props.movieList.length) {
      return <div className="ui active centered inline loader"></div>;
    }

    return this.props.movieList.map((movie) => {
      if (!movie.i) {
        return null;
      }

      return (
        <div className="item" key={movie.id}>
          <div className="ui tiny image">
            <img ref={movie.id} alt={movie.id} src={movie.i.imageUrl} />
          </div>
          <div className="middle aligned content">
            <div className="header">
              <Link to={`/movies/${movie.id}`}>{movie.l}</Link>
            </div>
            <div className="meta">
              <span className="cinema">{movie.s}</span>
            </div>
            <div className="meta">
              <span className="cinema">{movie.y}</span>
            </div>
            <div className="extra">{this.renderButton(movie)}</div>
          </div>
        </div>
      );
    });
  }

  onTermSubmit = (term) => {
    this.props.fetchMovies(term);
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui divided items">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: Object.values(state.movies),
    favouriteMovies: Object.values(state.favourites),
  };
};

export default connect(mapStateToProps, {
  fetchMovies,
  addFavouriteMovie,
  removeFavouriteMovie,
})(MovieList);
