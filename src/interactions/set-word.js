console.log('--- loading interaction -->');
/**
 * allows a user to set a new value for the saved word.
 * if there is no saved word, the user is told so and the interaction ends.
 * if there is a saved word, the user is asked to confirm replacing it.
 * if the user confirms, they enter a new word that replaces the old one.
 */
const setWord = () => {

  favoriteWord = enterWord('enter your favorite word!: ');

  // const confirmMessage = ' Do you want to replace your favorite word "' + favoriteWord + '" ?';
  // let userConfirm = confirm(confirmMessage);
  // if (userConfirm) {
  //   favoriteWord = prompt('Enter your replaced favorite word ');
  // }
  if (favoriteWord === '') {
    alert(' You do not have favorite word ');
    return;
  }

};
