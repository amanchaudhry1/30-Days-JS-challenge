const API_KEY = 'your_api_key_here'; // Replace with your API key from OMDB or The Movie Database
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const movieContainer = document.getElementById('movieContainer');
const movieModal = document.getElementById('movieModal');
const movieDetails = document.getElementById('movieDetails');
const closeModal = document.querySelector('.close');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    fetchMovies(query);
});

function fetchMovies(query) {
    fetch(`${API_URL}${query}`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.Search);
        })
        .catch(error => console.log('Error:', error));
}

function displayMovies(movies) {
    movieContainer.innerHTML = '';
    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                <button onclick="fetchMovieDetails('${movie.imdbID}')">More Info</button>
            `;
            movieContainer.appendChild(movieElement);
        });
    } else {
        movieContainer.innerHTML = '<p>No movies found</p>';
    }
}

function fetchMovieDetails(id) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
        })
        .catch(error => console.log('Error:', error));
}

function displayMovieDetails(movie) {
    movieDetails.innerHTML = `
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Released:</strong> ${movie.Released}</p>
        <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
    `;
    movieModal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    movieModal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === movieModal) {
        movieModal.style.display = 'none';
    }
};

