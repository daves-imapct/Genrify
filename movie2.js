const apiKey = '4db8d89474b0e70b0458d5823f41a251';
const baseUrl = 'https://api.themoviedb.org/3/';

// Function to get top 10 trending movies for the week
async function getTopMovies() {
    const response = await fetch(`${baseUrl}trending/movie/week?api_key=${apiKey}`);
    const data = await response.json();

    // Return the top 10 movies
    return data.results.slice(0, 10);
}

// Call the function
getTopMovies().then(movies => {
    document.querySelector(".one").innerHTML=movies[0].title;
    document.querySelector(".one-rate").innerHTML=movies[0].vote_average;
    document.querySelector(".two").innerHTML=movies[1].title;
    document.querySelector(".two-rate").innerHTML=movies[1].vote_average;
    document.querySelector(".three").innerHTML=movies[2].title;
    document.querySelector(".three-rate").innerHTML=movies[2].vote_average;
    document.querySelector(".four").innerHTML=movies[3].title;
    document.querySelector(".four-rate").innerHTML=movies[3].vote_average;
    document.querySelector(".five").innerHTML=movies[4].title;
    document.querySelector(".five-rate").innerHTML=movies[4].vote_average;
    document.querySelector(".six").innerHTML=movies[5].title;
    document.querySelector(".six-rate").innerHTML=movies[5].vote_average;
    document.querySelector(".seven").innerHTML=movies[6].title;
    document.querySelector(".seven-rate").innerHTML=movies[6].vote_average;
    document.querySelector(".eight").innerHTML=movies[7].title;
    document.querySelector(".eight-rate").innerHTML=movies[7].vote_average;
    document.querySelector(".nine").innerHTML=movies[8].title;
    document.querySelector(".nine-rate").innerHTML=movies[8].vote_average;
    document.querySelector(".ten").innerHTML=movies[9].title;
    document.querySelector(".ten-rate").innerHTML=movies[9].vote_average;
});
