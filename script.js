function Sentence(sentence) {

let lengthCounter = 0;
let wordCounter = 0;
let vowelCounter = 0;
let vowels="aeiouAEIOU";
for (let i = 0; i < sentence.length; i++) {

    lengthCounter++;

   
    if (vowels.includes(sentence[i])) {
        vowelCounter++;
    }
    
   
    if (sentence[i] === ' ') {
        wordCounter++;
    }
}

wordCounter++;
return 'lengthCounter: '+lengthCounter+' wordCounter: '+wordCounter+' vowelCounter '+vowelCounter;
}
