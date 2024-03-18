// cosmic-tools.js

const axios = require('axios');

// Function to get the current astronomical picture of the day
async function getAstronomyPictureOfTheDay() {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    return response.data;
  } catch (error) {
    console.error('Error fetching astronomy picture of the day:', error.message);
    return null;
  }
}

// Function to calculate the distance between two celestial bodies
function calculateDistanceBetweenCelestialBodies(body1, body2) {
  const distance = Math.abs(body1.distance - body2.distance);
  return `${distance} astronomical units`;
}

// Function to convert light years to parsecs
function lightYearsToParsecs(lightYears) {
  const parsecs = lightYears * 0.306601;
  return parsecs.toFixed(2);
}

module.exports = {
  getAstronomyPictureOfTheDay,
  calculateDistanceBetweenCelestialBodies,
  lightYearsToParsecs
};
