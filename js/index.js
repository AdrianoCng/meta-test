const matrix = $("#matrix");
const matrixReloaded = $("#matrix-reloaded");
const matrixRevolution = $("#matrix-revolution");
const cardDeck = $("#deck");

matrix.on("click", async () => {
    const urlEncoded = encodeURIComponent("http://www.omdbapi.com/?s=Matrix&apikey=720c3666");

    const { Search } = await (await fetch(`./php/fetchAPI.php?url=${urlEncoded}`)).json();

    renderCards(Search);
});

matrixReloaded.on("click", async () => {
    const urlEncoded = encodeURIComponent("http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666");

    const { Search } = await (await fetch(`./php/fetchAPI.php?url=${urlEncoded}`)).json();

    renderCards(Search);
});

matrixRevolution.on("click", async () => {
    const urlEncoded = encodeURIComponent("http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666");

    const { Search } = await (await fetch(`./php/fetchAPI.php?url=${urlEncoded}`)).json();

    renderCards(Search);
})


function renderCards(entries) {
    cardDeck.html("");

    entries.forEach(({ Poster, Title, Year }) => {
        cardDeck.append(`
            <div class="col-3">
                <div class="card text-center my-4 bg-light">
                    <img class="card-img-top" src="${Poster === "N/A" ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" : Poster}" alt="${Title}">
                    <div class="card-body">
                        <h5 class="card-title">${Title}</h5>
                        <p class="card-text">${Year}</p>
                    </div>
                </div>
            </div>
        `);
    })
}