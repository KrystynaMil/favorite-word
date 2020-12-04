'use strict';

console.log('--- loading interaction -->');

/**
 * if there is a favorite word, the user is asked to confirm before clearing it.
 * if there is no saved word the user is told there is no word to clear
 */
const clearWord = () => {

    if (favoriteWord === ''){
        alert('there is no word to clear');
    }
  
    const confirmMessage = 'are you sure you want to clear "' + favoriteWord + '" ?';
    const userConfirm = confirm(confirmMessage);
    if (userConfirm){
        favoriteWord = '';
    } else {
        favoriteWord = favoriteWord;
    }
};
