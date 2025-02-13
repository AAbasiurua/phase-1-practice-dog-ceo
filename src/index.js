console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    // fetching the dog images 
    // displaying the dog images

    const imgURL = "https://dog.ceo/api/breeds/image/random/4";
    const imgContainer = document.querySelector("#dog-image-container");

    // grab/fecthing the dog images and rendering them in the dom
    fetch(imgURL)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageURL=> {
                const img = document.createElement("img");
                img.src = imageURL;
                img.alt = "This is an image of a random dog";
                imgContainer.appendChild(img);
        });
    })
    .catch(error => console.error("For some reason, the image of the dog couldn't be fetched. Woomp Woomp :(", error))

    // 2nd
    const breedURL = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.querySelector("#dog-breeds");

    fetch(breedURL)
        .then(response => response.json())
        .then(data => {
            // keying into my breeds data to get the message 
            const breeds = Object.keys(data.message);
            // for each item (breed) in my breeds array
            breeds.forEach(item => {
                // im running this 
                const li = document.createElement("li");
                li.textContent = item;
                breedList.appendChild(li);
            })
        })
        // default error + custom error
        .catch(error => console.error("Someone didnt let the dog breeds out", error))

    // 3rd 
    document.addEventListener('click', event => {
        if(event.target.tagName === "LI") {
            event.target.style.color = 'brown';
        } 
    });

    // 4th 
    const breedFilter = document.querySelector("#breed-dropdown");

    breedFilter.addEventListener('change', (event) => {
        const letter = event.target.value;
        // grabbing my dog breed UL
        const breedList = document.getElementById('dog-breeds');
        // this is returning an HTML Collection of my dog breed LIs
        const breeds = breedList.getElementsByTagName('li');
        // coverting my HTML Collection to an array so that I can use the forEacvh array method 
        const breedsArr = Array.from(breeds);


        breedsArr.forEach(breed => {
            debugger
            if (letter === "" || breed.textContent.startsWith(letter)) {
                breed.style.display = "list-item";   
            } else {
                breed.style.display = "none";
            }
        });
    });
});
