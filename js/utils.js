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
};

async function fetchAPI(url) {
    const urlEncoded = encodeURIComponent(url);

    try {
        const { Search } = await (await fetch(`./php/fetchAPI.php?url=${urlEncoded}`)).json();

        return Search;
    } catch (error) {
        throw new Error("Failed to fetch. Please try again later")
    };
}