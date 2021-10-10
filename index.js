const textArea = document.getElementById("textArea");

var characterCount= document.getElementById("textArea");
var calculate = document.getElementById("calculate");
var characterCount = textArea;
var wordCount;
var characters;
var words;
var l;
var enterKeys;
var w = 0;
var newLine = 0;
var addWords = [];


calculate.addEventListener("click", count2);


// }
count2 ();
function count2 () {
	const text = textArea.value;
  console.log(text);

	characterCount = text.split(""); //turn text area into an array, count the array elements for number of characters
  characters = countCharacters(characterCount);
  document.getElementById("cCount").innerHTML = characters; //prints number of characters to page.

  wordCount = text.split(" "); //turn text area into an array, count array elements for number of words

 	words = countWords(wordCount);
console.log(wordCount);
	//words = words + enterKeys; //word count based on number of spaces plus number of linebreaks
  console.log(words);
  console.log(enterKeys);
  document.getElementById("wCount").innerHTML = words;
}//close count2

function countCharacters (count) {
	l = count.length; //running count of characters

  for (let i = 0; i < count.length; i++) {
  //to go through each element of the array
  	if (count[i] === " ") { //if character is a space
    	l--; //subtract one from character count
      console.log("empty string in countCharacters");
    } else if (count[i] === "") {
    	console.log("nothing in count characters");
    }
  }
  return l; //returns the number of non-space characters
} //working

/* function enter(br) {
  for (let i = 0; i < br.length; i++) {
    //go through each element
    if (br[i].split("/n")) { //if the sting has a line break
      w++;
      console.log("enter hit");
    }
  }
  return w;
}
 */
function countWords (count) {
	l= count.length; //running count of words

  for (let i = 0; i < count.length; i++) {
  	if (count[i] == "") {
    	l--;
      console.log("empty array in countWords");
    }
	}
  return l;
 } //working
