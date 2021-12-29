// let dictionary;


// fetch(
//   'https://gist.githubusercontent.com/dlants/d3b25b0f6c0bf8d023f65e86498bf9e6/raw/b310b5aff00f62f5073b3b8d366f5a639aa88ee3/3000-words.txt'
// ).then(
//   (res) => res.text()
// ).then(
//   (text) => {
//   dictionary = text.split('\n');
// });

// const searchedWord = document.querySelector('#word-search');

// function onInput() {
//   const word = searchedWord.value;
//   const o = []
//   console.log(word);

//   for (let word2 of (dictionary || [])) {
//     // sort each word for comparison
//     const sortedWord = word.split("").sort().join("")
//     const sortedWord2 = word2.split("").sort().join("")
//     if (sortedWord == sortedWord2) {
//       o.push(word2)
//     }
//   }

//   document.getElementById('output').innerHTML = JSON.stringify(o, null, 2)
// }

// document.addEventListener("keyup", function(event){
//     if (event.key === 'Enter') button.click();
// });



const searchedWord = document.querySelector('#word-search');
const button = document.querySelector('#button');


const dictionary = async function() {
    const wordsURL = "https://gist.githubusercontent.com/dlants/d3b25b0f6c0bf8d023f65e86498bf9e6/raw/b310b5aff00f62f5073b3b8d366f5a639aa88ee3/3000-words.txt";
    const response = await fetch(wordsURL, {mode: 'cors'});
    return (await response.text()).split('\n');
}

async function onInput(){
    const originalWord = searchedWord.value;
    let anagrams = '';
    const wordBank = await(dictionary());
    wordBank.forEach((word) => {
        if (originalWord.split('').sort().join('') === word.split('').sort().join('')) anagrams += `${word} `;
    })

    //console.log(o)
    document.getElementById('output').innerHTML = `List of anagrams: ${anagrams}`;
}

document.addEventListener("keyup", function(event){
    if (event.key === 'Enter') button.click();
});