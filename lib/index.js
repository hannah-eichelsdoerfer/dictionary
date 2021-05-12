// TODO: Autocomplete the input with AJAX calls.
const results = document.querySelector("#results");

const dictionary = ((search) => {
  // console.log(search);
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${search}`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      data.words.forEach((word) => {
        // console.log(word);
        const wordToInput = `
          <li>${word}</li>`;
        results.insertAdjacentHTML("beforeend", wordToInput);
      });
    });
});

// Add Event Listener to Search Bar
// const searchBar = document.querySelector("#search");
// searchBar.addEventListener("keypress", ({key}) => {
//   // console.log(key);
//   // dictionary(key);
// })

const searchBar = document.querySelector('#search');

searchBar.addEventListener('keyup', (event) => {
  const input = searchBar.value;
  // console.log(input);
  dictionary(input);
  results.innerHTML = '';
});

// console.log(data);
// console.log(data.count);
// const searchCount = `(There are ${data.count} words starting with your input)`
// results.insertAdjacentHTML("afterbegin", searchCount);
