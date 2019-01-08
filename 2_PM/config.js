// TODO: Add Google API key here - first hardcoded, then as environment variable.

const dotenv = require('dotenv');
dotenv.config();

const config = {
    apiKey: process.env.API_KEY,
};

module.exports = { config }