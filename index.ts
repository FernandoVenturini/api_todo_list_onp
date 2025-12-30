// Importing express module
import express from 'express'; 
// Importing the router from routes.ts
import router from './routes'; 

// Creating an instance of express
const server = express(); 

const PORT = 3000;

// Middleware to parse URL-encoded bodies
server.use(express.urlencoded({ extended: true })); 

// Using the imported router in the express server
server.use(router); 

server.listen(3000, () => {
	  console.log(`SERVER IS RUNNING ON PORT ${PORT}...`); // Logging server start message
});