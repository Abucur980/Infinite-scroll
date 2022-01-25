const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = "OLHD-JmZnq7ID1IXz510PIU71YzudCMQvBikf_ptOKY";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// console.log(process.env);

// helper for attributes
function setAttr(e, attributes) {
  for (const key in attributes) {
    e.setAttribute(key, attributes[key]);
  }
}

// create elements for images
function displayImages() {
  photosArray.forEach((image) => {
    // a elements to link to unsplash
    const element = document.createElement('a');
    // element.setAttribute('href', image.links.html);
    // element.setAttribute('target', '_blank');
    setAttr(element, {
      href: image.links.html,
      target: '_blank',
    });
    // image elements for photos
    const img = document.createElement('img');
    // img.setAttribute('src', image.urls.regular);
    // img.setAttribute('alt', image.alt_description);
    // img.setAttribute('title', image.alt_description);
    setAttr(img, {
      src: image.urls.regular,
      alt: image.alt_description,
      title: image.alt_description,
    });
    // place images inside a elements and then both into image container
    element.appendChild(img);
    imageContainer.appendChild(element);
  });
}


// Get photos from Unsplash API
async function getPhotos() {
    try{
      const response = await fetch(apiURL);
      photosArray = await response.json();
      displayImages();
    } catch (error) {
        // catch errors
    }
}

getPhotos();