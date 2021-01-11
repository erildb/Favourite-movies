import React from "react";
import { connect } from "react-redux";
import { fetchFavouriteMovies, removeFavouriteMovie } from "../../actions";

class FavouriteMovies extends React.Component {
  componentDidMount() {
    this.props.fetchFavouriteMovies();
  }

  removeFromFavourites(movie) {
    this.props.removeFavouriteMovie(movie.id);
    this.renderList();
  }

  renderList() {
    if (!this.props.favouriteMovies.length) {
      return (
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="search icon"></i>
            You have no favourite movies
          </div>
        </div>
      );
    }

    return this.props.favouriteMovies.map((movie) => {
      if (!movie.i) {
        return null;
      }

      return (
        <div className="item" key={movie.id}>
          <div className="ui tiny image">
            <img ref={movie.id} alt={movie.id} src={movie.i.imageUrl} />
          </div>
          <div className="middle aligned content">
            <div className="header">{movie.l}</div>
            <div className="meta">
              <span className="cinema">{movie.s}</span>
            </div>
            <div className="meta">
              <span className="cinema">{movie.y}</span>
            </div>
            <div className="extra">
              <button
                onClick={() => this.removeFromFavourites(movie)}
                className="ui grey right floated button"
              >
                Remove from Favourites
                <i className="right heart icon"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui divided items">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favouriteMovies: Object.values(state.favourites),
  };
};

export default connect(mapStateToProps, {
  fetchFavouriteMovies,
  removeFavouriteMovie,
})(FavouriteMovies);
