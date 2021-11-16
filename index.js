// Unsplash API
const count = 30;
const apiKey = "OLHD-JmZnq7ID1IXz510PIU71YzudCMQvBikf_ptOKY";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// console.log(process.env);
// Get photos from Unsplash API
async function getPhotos() {
    try{
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
        // catch errors
    }
}

getPhotos();