import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions";
import _ from "lodash";

class MovieInfo extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  addToFavourites(movie) {
    this.props.addFavouriteMovie(movie);
    this.renderList();
  }

  removeFromFavourites(movie) {
    this.props.removeFavouriteMovie(movie.id);
    this.renderList();
  }

  renderButton(movie) {
    const isFavourite = this.props.favouriteMovies.includes(
      this.props.selMovie
    );
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

  render() {
    const selectedMovie = this.props.selectedMovie;
    console.log(this.props.selMovie);

    if (_.isEmpty(this.props.selectedMovie)) {
      return <div className="ui active centered inline loader"></div>;
    }

    return (
      <div className="item" key={selectedMovie.title.id}>
        <div className="ui tiny image">
          <img
            ref={selectedMovie.title.id}
            alt={selectedMovie.title.id}
            src={selectedMovie.title.image.url}
          />
        </div>
        <div className="middle aligned content">
          <div className="header">{selectedMovie.title.title}</div>
          <div className="meta">
            <span className="cinema">
              {selectedMovie.title.runningTimeInMinutes}
            </span>
          </div>
          <div className="meta">
            <span className="cinema">{selectedMovie.title.year}</span>
          </div>
          <div>
            <p>{selectedMovie.plotSummary.text}</p>
          </div>
          <div className="extra">{this.renderButton(selectedMovie)}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    favouriteMovies: state.favourites,
    selectedMovie: state.selectedMovie,
    selMovie: state.movies[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchMovie })(MovieInfo);
