//TODO: Given a sentence as a string. Split it according to space and comma and create an array consisting of
//TODO:   the words of the array. The last word should not contain the last . or ! .

function arrayFromSentence(sentence) {
  const splitedSentence = sentence.split(' ,');
  const cleanWord = splitedSentence[splitedSentence.length - 1].slice(0, -1);
  splitedSentence[splitedSentence.length - 1] = cleanWord;
  return splitedSentence;
}

//? Testing with some sentences
console.log(
  `In case of “May the Force be with you.” the output will be ${arrayFromSentence(
    'May the Force be with you.'
  )}`
);
console.log(
  `In case of “Keep your friends close, but your
  enemies closer.” the output will be ${arrayFromSentence(
    'Keep your friends close, but your enemies closer.'
  )}`
);
