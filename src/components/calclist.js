import React, { Component } from 'react';

class Calclist extends Component {

  renderCalculators() {
    const { calcs } = this.props;
    if (calcs) {
      const calculators = calcs.sort((a, b) => {
        if (a.short_title[0] === '<') {
          a.short_title = a.short_title.split('').slice(3, -4).join('');
        }
        var nameA = a.short_title.toUpperCase();
        var nameB = b.short_title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      let firstLetter = '';
      return(calculators.map((key) => {
        let divId;
        let symbolRegEx = /[A-Za-z]/;
        let lowerRegEx = /[a-z]/;
        if (firstLetter === '' && !symbolRegEx.test(key.short_title[0])) {
          divId = 'noAlpha';
        }
        else if (key.short_title[0] !== firstLetter.toUpperCase() && !lowerRegEx.test(key.short_title[0])) {
          divId = key.short_title[0];
        }
        else {
          divId = null;
        }
        firstLetter = key.short_title[0];
        return (<div id={divId}  className='calc-container' key={key.calcID}> <div className='one-calc' dangerouslySetInnerHTML={{__html: key.short_title}}></div></div>)
      }))
    }
  }

    render() {
        return (
          <div className='list'>{this.renderCalculators()}</div>
        );
    }

}

export default Calclist;
