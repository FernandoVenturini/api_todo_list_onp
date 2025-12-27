// Importing express module
import express from 'express'; 
// Importing the router from routes.ts
import router from './routes'; 

// Creating an instance of express
const server = express(); 

// Middleware to parse URL-encoded bodies
server.use(express.urlencoded({ extended: true })); 

// Using the imported router in the express server
server.use(router); 

server.listen(3000, () => {
	  console.log('Server is running on http://localhost:3000'); // Logging server start message
});