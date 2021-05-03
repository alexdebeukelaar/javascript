/* becode/javascript
 *
 * /06-dom/01-select-one/script.js - 6.1: sélection par id
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.querySelectorAll(".target");
    let i;
     for (i = 0; i < target.length; i++) {
         target[i].innerHTML = "owned";
     }
     let target = document.querySelectorAll(".target");
    target.forEach(element => element.innerHTML = "owned");
})();
