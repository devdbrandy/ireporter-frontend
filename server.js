const express = require('express');
const path = require('path');

const app = express();
const logger = console;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Handles any requests that don't match the ones above
app.get('*', (request, response) => {
  response.sendFile(path.join(`${__dirname}/dist/index.html`));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => logger.log('We are live on port', PORT));
