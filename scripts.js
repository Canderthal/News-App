const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetchNews();

async function fetchNews() {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayNews(data);
    })
    .catch(error => {
        console.error('Error:', error);
        displayResult("Error occurred. Check the console for details.");
    })
}


function displayNews(data) {
    console.log(data.articles[1].urlToImage);
    for (let i = 1; i < 4; i++) {

        // Get all of the element ID info 
        const newsHeadline = document.getElementById("article" + i);
        const newsArticle = document.getElementById("articleText" + i);
        const source = document.getElementById("readMore" + i);
        const image = document.getElementById("image" + i);

        // Update all Element with content
        newsHeadline.textContent = data.articles[i].title;
        newsArticle.textContent = data.articles[i].content;
        source.href = data.articles[i].url;
        image.src = data.articles[i].urlToImage;

    }
}




