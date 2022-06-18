function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

//Below is my original implementation of palindrome.
/*

function isPalindrome(word) {
  // Write your algorithm here
  const alphanumericOnly = word.toLowerCase()
    .match(/[a-z0-9]/g)
  return alphanumericOnly.join('') ===
    alphanumericOnly.reverse().join('');
}

**/


//I have used method chaining to make it much more clear.
/*
  Add written explanation of your solution here
  Lowercase input via word.toLowerCase();
Match all alphanumeric characters using a regular expression via word.match(/[a-z0-9]/g)...
this match returns an array of found words
Use Array.reverse and Array.join on the alphanumeric matches to 
compare the original against its reversed self. 
If they're identical we get back true, otherwise we get back false!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
