import express from 'express';
import bodyParser from 'body-parser';
import router from './src/task/5-routes.js';  // Adjust the path if needed

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS) from the 'public' directory
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use __dirname now
app.use(express.static(__dirname + '/public')); // This tells Express to serve files from the /public folder

// Use your task routes
app.use('/api', router);  // All task routes are now prefixed with '/api'

// If no route matches, send the index.html file
app.get('*', (req, res) => {
  res.sendFile('src/public/submit-solution.html', { root: __dirname });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
