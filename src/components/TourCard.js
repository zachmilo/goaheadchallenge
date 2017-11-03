import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RateTour from './RateTour'
import Button from './Button';

class TourCard extends Component {
  static propTypes = {
    url: PropTypes.string,
    caption: PropTypes.string,
    name: PropTypes.string,
    length: PropTypes.number,
    averageOverallRating: PropTypes.number,
    buttonName: PropTypes.string
    };
  static propTypes = {
    url: 'http://via.placeholder.com/350x150',
    caption:'place holder',
    name: 'Image title',
    length: 1,
    averageOverallRating: 5,
    buttonName: 'Purchase'
  };

  render() {
    
    return (
      <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src = {this.props.url } alt = { this.props.caption } />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-4'>{ this.props.name }</p>
            <p className='subtitle is-6'>{ this.props.length } days</p>
          </div>
        </div>
        <div className='content'>
        <RateTour rating = { this.props.averageOverallRating } />
        {` ${ this.props.totalReviews } rating`} 
        <br/>
          { this.props.shortDescription }
        <hr/>
        <Button buttonStyle = 'button is-primary is-centered purchaseButton' fontAwesomeIcon = 'fa fa-usd' name = { this.props.buttonName } />  
        </div>
      </div>
    </div>
    );
  }
}

export default TourCard;
