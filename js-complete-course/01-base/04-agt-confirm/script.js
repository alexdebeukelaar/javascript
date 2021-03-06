/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let state = true;

    while (state) {
      const age = prompt('Whats your age?');
      const gender = prompt('Male or female?');
      const town = prompt('Where do you live?');
  
      const result = confirm(
        `You are a ${gender} from ${town} and you are ${age} years of age?`
      );
  
      if (result) state = false;
    }

})();
