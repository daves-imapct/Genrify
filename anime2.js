const query = `
query {
  Page(page: 1, perPage: 10) {
    media(type: ANIME, sort: TRENDING_DESC) {
      id
      title {
        romaji
        english
        native
      }
      trending
    }
  }
}`;

async function fetchTopTrendingAnime() {
  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query })
  });
  
  const data = await response.json();
  document.querySelector(".anime1").innerHTML=data.data.Page.media[0].title.english;
  document.querySelector(".anime2").innerHTML=data.data.Page.media[1].title.english;
  document.querySelector(".anime3").innerHTML=data.data.Page.media[2].title.english;
  document.querySelector(".anime4").innerHTML=data.data.Page.media[3].title.english;
  document.querySelector(".anime5").innerHTML=data.data.Page.media[4].title.english;
  document.querySelector(".anime6").innerHTML=data.data.Page.media[5].title.english;
  document.querySelector(".anime7").innerHTML=data.data.Page.media[6].title.english;
  document.querySelector(".anime8").innerHTML=data.data.Page.media[7].title.english;
  document.querySelector(".anime9").innerHTML=data.data.Page.media[8].title.english;
  document.querySelector(".anime10").innerHTML=data.data.Page.media[9].title.english;
}

// Call the function and display the results in the HTML elements
fetchTopTrendingAnime();
