function countLetters(string){
  var charCount = {};
  var noSpaces = string;

  //console.log("noSpace: ",noSpaces)
// [lighthouseinthehouse]
  for(var i = 0; i < noSpaces.length; i++){

    var letter = noSpaces[i];
    if(letter === ' '){
      continue;
    }
    if(!charCount[letter]){
      charCount[letter] = [i];
    }
    else{
     //     [0]
      charCount[letter].push(i)    }

  }
return charCount;
}

console.log(countLetters("lighthouse in the house"))

// {
//   l: [0],
//   i: [1,10],
//   g: [2],
//   h: [3,13]
//   t: [2,]
//   o: [2,]
//   u: [2,]
//   s: [2,]
//   e: [3,]
//   n: 1,
// }