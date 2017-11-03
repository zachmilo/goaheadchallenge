import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  static propTypes = {
    rating: PropTypes.number
    };
    static defaultProps = {
      rating: 5
      };
    constructor(){
      super();
      this.styleStar = this.styleStar.bind(this);
    }
  styleStar(averageOverallRating){
    const starScale = 5;
    const one = 1;
    let styleArray = [];

    for(let start = 1; start <= starScale; start++) {

      if(averageOverallRating >= 1) {
        averageOverallRating -= one;
        styleArray.push('fa fa-star');
      }
      else if(averageOverallRating >= .5) {
        averageOverallRating = 0;
        styleArray.push('fa fa-star-half-o');
      }
      else {
        styleArray.push('fa fa-star-o');
      }
    }
    return styleArray;
  }
  render() {
     let starStyle= this.styleStar(this.props.rating)
    return (
     <span>
        <i className={ starStyle[0] } aria-hidden="true"></i>
        <i className={ starStyle[1] } aria-hidden="true"></i>
        <i className={ starStyle[2] } aria-hidden="true"></i>
        <i className={ starStyle[3] } aria-hidden="true"></i>
        <i className={ starStyle[4] } aria-hidden="true"></i>
     </span>
    );
  }
}

export default ProgressBar;
