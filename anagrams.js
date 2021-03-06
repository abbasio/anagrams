//---------GET WORD LIST
const dictionary = async function() {
    const wordsURL = "https://gist.githubusercontent.com/dlants/d3b25b0f6c0bf8d023f65e86498bf9e6/raw/b310b5aff00f62f5073b3b8d366f5a639aa88ee3/3000-words.txt";
    const response = await fetch(wordsURL, {mode: 'cors'});
    return (await response.text()).split('\n');
}

//---------ANAGRAM ALGORITHM 
async function onInput(){
    const originalWord = document.querySelector('#word-search').value;
    const anagrams = [];
    const wordBank = await(dictionary());
   
    wordBank.forEach((newWord) => {
        if ((originalWord.split('').sort().join('') === newWord.split('').sort().join('')) && originalWord != newWord) anagrams.push(newWord);
    })
    
    if (anagrams.length === 0) document.getElementById('output').innerHTML = "No anagrams found :("
    else document.getElementById('output').innerHTML = `Anagram(s) of ${originalWord}: ${anagrams.join(', ')}`
}

//---------ENTER KEY FUNCTIONALITY
document.addEventListener("keyup", function(event){
    const button = document.querySelector('#button');
    if (event.key === 'Enter') button.click();
});



//---------OLD CODE

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



