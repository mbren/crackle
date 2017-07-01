//cracklepop.js

"use strict";

/**
 * Returns a string containing the numbers from "startNum" to "finishNum" (inclusive). 
 * However, if a number is divisible by 3, use "Crackle" instead of the number.
 * If it's divisible by 5, use "Pop".  If it's divisible by both 3 and 5,
 * use "CracklePop".
 *
 * @param {number} startNum The first number.
 * @param {number} finishNum The last number.
 * @return {string} A string containing numbers, "Crackle", "Pop", or "CracklePop".
 */
function cracklepop(startNum, finishNum) {
    var result = "";
    var item = "";
    var i = 0;

    for (i = startNum; i <= finishNum; i += 1) {
        if ((i % 3 === 0) && (i % 5 === 0)) { //if divisible by both 3 and 5
            item = "CracklePop";
        } else if (i % 3 === 0) {  //divisible by 3
            item = "Crackle";
        } else if (i % 5 === 0) { //divisible by 5
            item = "Pop";
        } else { //otherwise, use the number.
            item = i;
        }
        result = result + " " + item;
    }
    return result;
}

var printResult = document.querySelector('p');
printResult.textContent = cracklepop(1, 100);
