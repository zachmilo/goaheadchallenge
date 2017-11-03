import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
    };

  static defaultProps = {
    title: 'My Title',
    subtitle: 'A Little More Content'
  }

  render() {
    return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            { this.props.title }
          </h1>
          <h2 className="subtitle">
            { this.props.subtitle }
          </h2>
        </div>
      </div>
    </section>
    );
  }
}



export default Header;
