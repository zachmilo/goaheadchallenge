import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import DropDown from '../components/DropDown';

import fetchTours from '../actions/tourActions';
import { sortBy } from '../actions/sortTourActions';

@connect((store)=>{
  return {
    fetchtourData: store.tours,
    sort: store.sorts
  }
})

class Root extends Component {
  constructor(props){
    super(props);
    this.sortCards = this.sortCards.bind(this);
    this.props.dispatch(fetchTours())
  }
  /**
   * Takes in an option to sort displayed content
   * @param {String} filter 
   */
  sortCards(filter) {
    this.props.dispatch(sortBy(filter))
  }
  render() {
    return (
        <div>
        <Header title = "Go Ahead Tours" subtitle = "A personal take on group travel" />
        <DropDown 
          buttonContent = { <i className="fa fa-sort fa-align-center" aria-hidden="true"></i> }
          dropdownContent = { ['Highest Price', 'Lowest Price', 'Longest Days', 'Shortest Days'] }
          buttonName = 'Sort'
          clickEvent = { this.sortCards }
        />
        <section className='section'>
          <div className='container'>
          {
          this.props.sort.tours.map((card,index) => {
            return (
              <div key = { index } className='columns'>
                <div className='column column is-8 is-offset-2'>
                  <TourCard 
                    url = { card.coverImage.url } 
                    caption = { card.coverImage.caption } 
                    name = { card.name }
                    shortDescription = { card.shortDescription }
                    length = { card.length }
                    buttonName = { card.leadInPriceUSD }
                    averageOverallRating = { card.averageOverallRating }
                    totalReviews = {card.totalNumReviews}
                  />
                </div>
              </div>
            )
          })
        }
        </div>
      </section>
      <Footer footerContent = { <strong> Go Ahead Challenge </strong> } />
      </div>
    );
  }
}

export default Root;
