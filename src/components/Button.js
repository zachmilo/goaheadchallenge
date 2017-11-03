import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    buttonStyle: PropTypes.string.isRequired,
    fontAwesomeIcon: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
    };

    static defaultProps = {
      buttonStyle: 'button is-dark',
      fontAwesomeIcon: 'fa fa-smile-o',
      name: 'My Awesome Button'
    };

  render() {
    return (
      <a onClick={ this.props.clickEvent } className={ this.props.buttonStyle }>
      <span className="icon">
        <i className={ this.props.fontAwesomeIcon }></i>
      </span>
      <span>{ this.props.name }</span>
    </a>
    );
  }
}

export default Button;
