function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const x = word.length -1 -i;
    if (word[i] !== word[x]) return false;
  }
  return true}

  if (require.main === module) {

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));
  }
  
  module.exports = isPalindrome;