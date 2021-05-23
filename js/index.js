const matrix = $("#matrix");
const matrixReloaded = $("#matrix-reloaded");
const matrixRevolution = $("#matrix-revolution");
const carouselInner = $(".carousel-inner");

matrix.on("click", async () => {
    const { Search } = await (await fetch("http://www.omdbapi.com/?s=Matrix&apikey=720c3666")).json();

    console.log(Search);

    const data = {
        data: JSON.stringify(Search)
    }

    $.post("./php/movies.php", data);
})