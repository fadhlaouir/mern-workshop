### MongoDB Express Node.js Workshop

This is a simple workshop that demonstrates how to build a CRUD (Create, Read, Update, Delete) application using MongoDB, Express, and Node.js.

## Getting Started

To get started, you'll need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website, and MongoDB from the official website or by using a cloud service like Atlas.

Once you have Node.js and MongoDB set up, you can `clone` this repository to your local machine and install the dependencies by running:

```
npm install
```

Next, create a `.env` file in the root directory of the project and add the following environment variables:

```
MONGODB_URI=<your-mongodb-uri>
PORT=<your-port-number>
```

Make sure to replace `<your-mongodb-uri>` with the URI for your MongoDB database, and `<your-port-number>` with the port number you want the application to run on.

Finally, start the application by running:

```
npm run develop
```

The application should now be running on the specified port number. You can access it in your web browser by navigating to `http://localhost:<your-port-number>`.

## API Endpoints

The following API endpoints are available:

GET `/api/v1/workshop` - Get all workshops

GET `/api/v1/workshop/:id` - Get a workshop by ID

POST `/api/v1/workshop` - Create a new workshop

PUT `/api/v1/workshop/:id` - Update a workshop by ID

DELETE `/api/v1/workshop/:id` - Delete a workshop by ID

## Technology Stack

The application is built using the following technologies:

`MongoDB` - A NoSQL database used for storing workshop data
`Express` - A web framework for Node.js used for building the server-side application
`Node.js` - A JavaScript runtime used for running the server-side application

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

This workshop was created to help ISET KAIROUAN Students learn how to build a CRUD application using MongoDB, Express, and Node.js. 
