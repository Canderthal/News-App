
const URL = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${APIKEY}`;

async function fetchNews() {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchNews();