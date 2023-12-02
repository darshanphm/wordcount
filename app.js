// document.getElementById("inputText").addEventListener("input", function () {
//   var inputText = this.value;

//   // Word count
//   var words = inputText.match(/\b\w+\b/g);
//   var wordCount = words ? words.length : 0;
//   document.getElementById("wordCount").textContent = wordCount;

//   // Character count
//   // Remove spaces from the input text
//   var textWithoutSpaces = inputText.replace(/\s/g, "");

//   // Count the characters in the text without spaces
//   var charCount = textWithoutSpaces.length;

//   // Display the character count
//   document.getElementById("charCount").innerText = charCount;
// });

function countWordsAndChars() {
  let inputText = document.getElementById("inputText").value;

  // Count words
  let words = inputText.match(/\S+/g);
  let wordCount = words ? words.length : 0;

  // Count characters without spaces
  let charCount = inputText.replace(/\s/g, "").length;

  // Update counts in the HTML
  document.getElementById("wordCount").innerText = wordCount;
  document.getElementById("charCount").innerText = charCount;
}
