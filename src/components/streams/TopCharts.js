import React from "react";
import { connect } from "react-redux";

class TopCharts extends React.Component {
  onSubmit = (formValues) => {
    this.props.createMovie(formValues);
  };

  render() {
    return (
      <div>
        <h3>Fetch top chart list from IMDB API</h3>
      </div>
    );
  }
}

export default connect(null)(TopCharts);
