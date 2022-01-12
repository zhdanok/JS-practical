'use strict';

module.exports = {
    /**
     * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
     * @param {number} seconds
     * @returns {Date}
     *
     * @example
     *      31536000 -> 01.06.2021
     *      0 -> 01.06.2020
     *      86400 -> 02.06.2020
     */
    secondsToDateLikeString: function secondsToDate(seconds) {
        let date = new Date(seconds * 1000);
        date.setFullYear(date.getFullYear() + 50);
        date.setMonth(date.getMonth() + 5);
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear();
        if (yy < 10) yy = '0' + yy;

        let stringDate = dd + '.' + mm + '.' + yy;

        return stringDate;

    },
    secondsToDate:
        function secondsToDate(seconds) {
            let date = new Date(seconds * 1000);
            date.setFullYear(date.getFullYear() + 50);
            date.setMonth(date.getMonth() + 5);

            return date;
        },
    /**
     * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
     * ! Numbers will always be below 1024 (not including 1024)
     * ! You are not able to use parseInt
     * @param {number} decimal
     * @return {string}
     *
     * @example
     *      5 -> "101"
     *      10 -> "1010"
     */
    converter: function toBase2Converter(decimal) {
        let binary = '';
        while (decimal != 0) {
            let bit = decimal % 2;
            binary = bit + binary;
            decimal = Math.trunc(decimal / 2);
        }
        return binary;
    },
    /**
     * You must create a function that takes two strings as arguments and returns the number of times the first string
     * is found in the text.
     * @param {string} substring
     * @param {string} text
     * @return {number}
     *
     * @example
     *      'a', 'test it' -> 0
     *      't', 'test it' -> 2
     *      'T', 'test it' -> 2
     */
    counter: function substringOccurrencesCounter(substring, text) {
        text = text.toLowerCase();
        substring = substring.toLowerCase();
        let pos = 0;
        let count = 0;
        while (true) {
            let index = text.indexOf(substring, pos);
            if (index == -1) break;
            count++;
            pos = index + 1;
        }
        return count;
    },
    /**
     * You must create a function that takes a string and returns a string in which each character is repeated once.
     *
     * @param {string} string
     * @return {string}
     *
     * @example
     *      "Hello" -> "HHeelloo"
     *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
     */
    repeatter: function repeatingLitters(string) {
        let array = string.split('');
        let repittingString = '';
        for (let i = 0; i < array.length; i++) {
            let first = string.indexOf(array[i]);
            let last = string.lastIndexOf(array[i]);
            if (first == last) {
                repittingString += array[i] + array[i];
            } else {
                repittingString += array[i];
            }
        }
        return repittingString;

    }
}


/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {

}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {

}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {

}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {

}