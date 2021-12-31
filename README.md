# ANAGRAMS

Written as an update to [this piece of code](https://jsbin.com/bogebikido/edit?html,js,output)

Direct link to updated script available [HERE](https://github.com/abbasio/anagrams/blob/main/anagrams.js)

The changes I made to this code were primarily focused on readability. I decided to rewrite the 'fetch' code using 'Async/Await', a more modern syntax that is written similarly to synchronous code - making it easier for people to read and understand. I rewrote the 'for...of' loop into a forEach function for similar reasons - more modern syntax, and more easily readable. 

I also decided to split the 'onInput' function into two parts: the first part, which obtains the word list from the given URL, and the second part, which takes the word list and applies the algorithm to check for anagrams. This uses concepts of functional programming to make the entire script more modular. Instead of relying on a specific list of words, the algorithm can now take any input array as a list and check the user's input against that given word list. By changing the 'dictionary' function, the anagram algorithm can be run independently on a new word list without any issues - as long as the list of words is presented as an array.

I also elected to add a search button, and give functionality for pressing the 'enter' key instead of constantly updating the user's search value every time they typed a letter. The 'onInput' function now executes when the search button is clicked (or the enter button is pressed) instead of every time a new letter is typed. This gives a little more control to the user and feels like a better quality of life update. Similarly, I rewrote the output to be a little friendlier using template literals instead of simply printing the resulting array. I also made sure to exclude the user's input from being counted as an anagram, since I think it's a given that any word is an anagram of itself.

Ultimately, as a developer who is still learning the ins and outs of JavaScript, I don't intend to say that this is objectively the better way of writing code. However, I think that these changes allow for more easily readable code using modern syntax, more modifiable scripts using functional programming, and an overall better experience for the users with some quality of life changes. 

Live preview available [HERE](https://abbasio.github.io/anagrams/)

