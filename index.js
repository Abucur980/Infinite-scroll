const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Unsplash API
const count = 30;
const apiKey = "OLHD-JmZnq7ID1IXz510PIU71YzudCMQvBikf_ptOKY";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// console.log(process.env);

// check if the images are loaded
function imageLoaded() {
  console.log("loaded");
  ++imagesLoaded;
  if (imagesLoaded === totalImages) {
    loader.hidden = true;
    ready = true;
    console.log('ready=', ready);
  }
}

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
    totalImages = photosArray.length;
    console.log('total images', totalImages);
    // img.setAttribute('src', image.urls.regular);
    // img.setAttribute('alt', image.alt_description);
    // img.setAttribute('title', image.alt_description);
    setAttr(img, {
      src: image.urls.regular,
      alt: image.alt_description,
      title: image.alt_description,
    });

    // check when images have finished loading
    img.addEventListener('load', imageLoaded);

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

// scroll
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready === true) {
    ready = false;
    imagesLoaded = 0;
    getPhotos();
  }
})

getPhotos();