const apiKey = 'b663b294b2e86557e04945ad5df148e2eb1715b92';
const url = `http://www.gamespot.com/api/articles/?apikey=[663b294b2e86557e04945ad5df148e2eb1715b92]`;

const params = {
    ordering: '-added',
    search: 'news',
    key: apiKey
};

// Constructing URL with query parameters manually
const queryParams = Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');
const requestUrl = `${url}?${queryParams}`;

// Make the GET request
fetch(requestUrl)
    .then(response => {
        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the JSON response
            return response.json();
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    })
    .then(data => {
        // Do something with the data (e.g., display news titles)
        const newsContainer = document.getElementById('news-container');
        data.results.forEach(result => {
            // Create a new <p> element for each news title
            const newsTitle = document.createElement('p');
            newsTitle.textContent = result.name + " - " + result.released;
            // Append the <p> element to the news container
            newsContainer.appendChild(newsTitle);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
