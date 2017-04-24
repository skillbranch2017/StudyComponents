import React from 'react'; //eslint-disable-line
import Rate from './Rate';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Rate', module)
    .add('empty', () => (
      <Rate/>

    ))
    .add('value',() => ( <Rate value="6" /> ))	
/*    .add('href', () => (
      <A href="/test">
        Href
      </A>
    ))
    .add('onClick', () => (
      <A href="/test" onClick={action('onClick')}>
        onClick
      </A>
    ))*/;
};
