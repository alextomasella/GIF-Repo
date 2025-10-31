let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=OVHpSWJMuftkrJVmp4VLxAdNRdGAHvPP&q=Halloween&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
console.log(endpoint);

async function getGifs() {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=OVHpSWJMuftkrJVmp4VLxAdNRdGAHvPP&q=Halloween&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    console.log(images);

    const output = document.getElementById("gif-output");
    output.innerHTML = "";
}

