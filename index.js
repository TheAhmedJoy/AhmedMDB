var movieName = ""

window.onload = function () {
    let movieSearchInput = document.querySelector(".movie-search")

    movieSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            movieName = movieSearchInput.value
            localStorage.setItem("movieName", movieName)
            searchMovie(movieName)
        }
    })
}

function searchMovie(movieName) {
    window.location.href = `${window.location.origin}/movie-page.html`
}