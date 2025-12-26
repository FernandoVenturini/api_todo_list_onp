import express from 'express'; // Importing express module
import router from './routes'; // Importing the router from routes.ts

const server = express(); // Creating an instance of express

server.use(router); // Using the imported router in the express server

server.listen(3000, () => {
	  console.log('Server is running on http://localhost:3000'); // Logging server start message
});