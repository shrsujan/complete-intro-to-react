import React from 'react';
import PropTypes from 'prop-types';

class ShowCard extends React.Component {
  render() {
    return (
      <div className="show-card">
        <img alt={`${this.props.show.title} Show Poster`} src={`/public/img/posters/${this.props.show.poster}`} />
        <div>
          <h3>{this.props.show.title}</h3>
          <h4>({this.props.show.year})</h4>
          <p>{this.props.show.description}</p>
        </div>
      </div>
    );
  }
}

ShowCard.propTypes = {
  show: PropTypes.object
};

export default ShowCard;
