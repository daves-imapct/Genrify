const searchBtn = document.querySelector(".search-click");
const searchInput = document.querySelector(".search");

const apiUrl = 'https://graphql.anilist.co';

// Function to fetch data from AniList based on user input
async function fetchAniListData(queryString) {
  const query = `
    query {
      Media(search: "${queryString}", type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        description
        averageScore
        genres
        episodes
        status
         startDate {
      year
    }
      studios {
      nodes {
        name
      }
    }
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  `;

  try {
    // Make the request to AniList
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Display the results

    console.log(data.data);
    const media = data.data.Media;

    // Update the HTML elements with the fetched data

    document.querySelector('.anime-name').innerHTML = media.title.english;
    document.querySelector('.anime-cover').src = media.coverImage.extraLarge;
    document.querySelector('.anime-description').innerHTML = media.description;
    document.querySelector('.rating-number').innerHTML = media.averageScore/10;
    document.querySelector('.episodes').innerHTML = media.episodes+" Episodes";
    document.querySelector('.year').innerHTML = media.startDate.year;
    document.querySelector('.status').innerHTML = media.status;

    document.querySelector(".search-result").style.display = "block";
  document.querySelector(".top-info").style.marginTop = "100vh";
  
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    document.querySelector(".search-result").style.display = "none";
  document.querySelector(".top-info").style.marginTop = "0";
  document.querySelector(".error").style.display = "flex";
  }
}
searchBtn.addEventListener("click", () => {
      fetchAniListData(searchInput.value);
  });