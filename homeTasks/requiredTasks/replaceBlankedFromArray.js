//TODO: Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
//TODO:  words from the array.

function replaceBlank(sentence, arrayOfWords) {
  for (let singleWord of arrayOfWords) {
    sentence = sentence.replace('_', singleWord);
  }
  return sentence;
}

//?Testing pairs of sentences and arrays of words

console.log(
  `Blank sentence: “_, we have a _.”, array:[“Houston”, “problem”]   ${replaceBlank(
    '“_, we have a _.”',
    ['Houston', 'problem']
  )}`
);
console.log(
  `Blank sentence: “If at _ you donʼt _, try, try _.”, array:[“first”, “succeed”,
    “again”]   ${replaceBlank('“If at _ you donʼt _, try, try _.”', [
      'first',
      'succeed',
      'again',
    ])}`
);
console.log(
  `Blank sentence: “May the _ _ _ _.”, array:[“Force”, “be”, “with”, “you”]   ${replaceBlank(
    '“May the _ _ _ _.”',
    ['Force', 'be', 'with', 'you']
  )}`
);
