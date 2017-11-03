import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDown extends Component {
  static propTypes = {
    buttonContent: PropTypes.element.isRequired,
    dropdownContent: PropTypes.array,
    showDefaultArrow: PropTypes.bool,
    buttonName: PropTypes.string
    };
    static defaultProps = {
      buttonContent: React.createElement('<i className="fa fa-sort fa-align-center" aria-hidden="true"></i>'),
      dropdownContent:[],
      showDefaultArrow: false,
      buttonName: 'My Dropdown'
    };
    constructor(){
      super();
      this.showArrow = this.showArrow.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
    }
  
    showArrow() {
    if(this.props.showDefaultArrow) {
      return (
        <span className='icon is-small'>
          { this.props.showDefaultArrow? <i className='fa fa-angle-down' aria-hidden='true'></i>:'' }
        </span>
      )
    }
    return '';
  }  
  clickHandler(event) {
    this.props.clickEvent(event.target.getAttribute('value'));
  }
  render() {
    return (
      <div className='dropdown sortDropDown is-left is-hoverable'>
        <div className='dropdown-trigger'>
          <button className='button' aria-haspopup='true' aria-controls='dropdown-menu4'>
           <span> { this.props.buttonName } </span>
           { this.props.buttonContent }
            {this.showArrow()}
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu4' role='menu'>
          <div className='dropdown-content'>
              { 
                this.props.dropdownContent.map((option,index) => {
                  return(
                    <a onClick={this.clickHandler} href='#' key = { index } value={option} className = 'dropdown-item'>{option}</a>
                  )
                })
              }
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown;
