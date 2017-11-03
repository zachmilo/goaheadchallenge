import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    footerContent: PropTypes.element
  }
  // static defaultProps = {
  //   footerContent: React.createElement('<span>This is some content</span>')
  // }

  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='content'>
            <p>
              { this.props.footerContent }
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
