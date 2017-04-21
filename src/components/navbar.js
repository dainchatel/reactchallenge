import React, { Component } from 'react';

class Navbar extends Component {

    renderAlphaNav() {
      const alpha = '#abcdefghijklmnopqrstuvwxyz';
      const alphaNav = alpha.toUpperCase().split('');
      return(alphaNav.map(key => {
        let anchorLink;
          if (key === '#') {
            anchorLink = 'noAlpha';
          }
          else {
            anchorLink = key;
          }
        return(<a href={'#'+anchorLink} key={key}>{key}</a>)
      }))
    }

    render() {
        return (
          <div className='list-nav'>{this.renderAlphaNav()}</div>
        );
    }
}

export default Navbar;
