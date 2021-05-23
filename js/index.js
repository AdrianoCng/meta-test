const matrix = $("#matrix");
const matrixReloaded = $("#matrix-reloaded");
const matrixRevolution = $("#matrix-revolution");
const cardDeck = $("#deck");

matrix.on("click", async () => {
    try {
        const results = await fetchAPI("http://www.omdbapi.com/?s=Matrix&apikey=720c3666");

        renderCards(results);
    } catch (error) {
        alert(error.message)
    }
});

matrixReloaded.on("click", async () => {
    try {
        const results = await fetchAPI("http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666");

        renderCards(results);
    } catch (error) {
        alert(error.message)
    }
});

matrixRevolution.on("click", async () => {
    try {
        const results = await fetchAPI("http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666");

        renderCards(results);
    } catch (error) {
        alert(error.message);
    }
})