import React from "react";

export const renderFavButton = ({ favouriteMovies, movie }) => {
  const isFavourite = props.favouriteMovies.includes(movie);
  const buttonType = isFavourite ? "grey" : "green";
  const buttonText = isFavourite
    ? "Add to Favourites"
    : "Remove from Favourites";
  const actionType = isFavourite
    ? removeFromFavourites
    : addToFavourites;

  return (
    <button
      onClick={() => actionType(movie)}
      className={`ui ${buttonType} right floated button`}
    >
      {buttonText}
      <i className="right heart icon"></i>
    </button>
  );
};
