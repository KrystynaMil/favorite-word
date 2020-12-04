'use strict';

console.log('--- loading interaction -->');


/**
 * allows a user to set a new value for the saved word.
 * if there's already a saved word, they are asked to confirm replacing it
 */
const reverseWord = () => {
 if(favoriteWord === null || favoriteWord === ''){
   alert('there is no favorite word');
 }
 else {
  let reverseResult= reverseString();
  beforeAndAfter(favoriteWord,reverseResult,'reversed');
 }
 }
