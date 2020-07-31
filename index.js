// add solution here
function theBeatlesPlay(musicians, instruments) {
  var i;
  var array = [];
  for(i = 0; i < musicians.length; i ++){
array.push(`${musicians[i]}` + " plays " + `${instruments[i]}`,)
console.log(i)
}
return array
}
//----------------------------
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
var i = 0
var array = [];
while(array.length < facts.length) {
  array.push(`${facts[i]}` + "!!!")
  i++;
}
return array
}
//----------------------------
function iLoveTheBeatles(num) {
  var array = [];
	var i = num

	do{ array.push("I love the Beatles!");
  i ++;
} while (i < 15)
  return array;
}
