const searchBtn = document.querySelector(".search-click");
const searchInput = document.querySelector(".search");
const genre =  document.querySelector(".genres");
function getMovie(movieTitle){
    const apiKey = "976c021c";

    fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector(".search-result").style.display = "block";
  document.querySelector(".top-info").style.marginTop = "100vh";
            document.querySelector(".movie-name").innerHTML = data.Title;
            document.querySelector(".rating-number").innerHTML = data.imdbRating;
            document.querySelector(".pg").innerHTML = data.Rated;
            document.querySelector(".year").innerHTML = data.Year;
            document.querySelector(".time").innerHTML = data.Runtime;
            document.querySelector(".plot-write").innerHTML = data.Plot;
            document.querySelector(".cast-write").innerHTML = data.Actors;
            document.querySelector(".writers-write").innerHTML = data.Writer;
            document.querySelector(".movie-cover").src = data.Poster;
            if(data.totalSeasons === undefined){
            document.querySelector(".seasons").style.display="none"
            }
            else{
                document.querySelector(".seasons").innerHTML = data.totalSeasons+" Seasons";
            }
            genre.innerHTML = `
            <div>${data.Genre.split(",").
                join("</div><div>")}</div>
            `
            document.querySelector(".search-result").style.display = "block";
  document.querySelector(".top-info").style.marginTop = "100vh";
            
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.querySelector(".search-result").style.display = "none";
            document.querySelector(".top-info").style.marginTop = "0";
            document.querySelector(".error").style.display = "flex";
        });
}

searchBtn.addEventListener("click", () => {
        getMovie(searchInput.value);
});
