/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const { googleMapsClient } = require('./google_api.js');

googleMapsClient.geocode({address: process.argv[2]}).asPromise()
  .then((response) => {
    
    // Get latitude and longitude
    const {geometry: { location: {lat, lng} }} = response.json.results[0];
    RETURNED_COORDINATES = JSON.stringify(lat) + ", " + JSON.stringify(lng);

    // Get address
    const {formatted_address} = response.json.results[0];
    RETURNED_ADDRESS = JSON.stringify(formatted_address);

    // Return formatted string
    console.log(`${process.argv[2]} is located at coordinates (${RETURNED_COORDINATES}), at the address ${RETURNED_ADDRESS}.`);
  })

  // Handle errors
  .catch((err) => {
    console.log(err);
    return -1;
}); 
