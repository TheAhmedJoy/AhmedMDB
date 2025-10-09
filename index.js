let movieName = localStorage.getItem("movieName") || ""

let movieSearchInput = document.querySelector(".movie-search")
let movieSearchButton = document.querySelector(".movie-search-button")

movieSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        movieName = movieSearchInput.value
        localStorage.setItem("movieName", movieName)
        loadMoviePage()
    }
})

movieSearchButton.addEventListener("click", () => {
    movieName = movieSearchInput.value
    localStorage.setItem("movieName", movieName)
    loadMoviePage()
})


function loadMoviePage() {
    window.location.href = `${window.location.origin}/movie-page.html`
}