// DOM Element
const joke = document.querySelector(".joke");
const getJokeBtn = document.querySelector(".btn");

// API URL
const URL = `https://api.icndb.com/jokes/random`;

getJoke();
async function getJoke() {

    const res = await fetch(URL);
    const data = await res.json();

    joke.innerHTML = data.value.joke;
}

getJokeBtn.addEventListener('click', getJoke);