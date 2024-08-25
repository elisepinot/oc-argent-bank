# Project #13 - Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank and the frontend


## Objectives of the project

Connect to a Back End with an API Using React
Remede Agency needs to complete their website's code to communicate with the back end. 
Tasks: write REST API calls to connect the front end to the back end of the website and model new API endpoints.


### Skills acquired in this project
* Interact with an API
* Authenticate to a secure API
* Create API models
* Implement a state management system in a React app

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

#### Run the server

```bash
# Go to the back-end folder
cd back-end-argent-bank

# Install dependencies
npm install

# Start local dev server
npm run dev:server

```

Your server should now be running at http://locahost:3001.

#### Launch the app

1. Open a new terminal window in the cloned project
1. Run the following commands:

```bash
# Go to the front-end folder
cd front-end-argent-bank

# Install dependencies
npm install

# Launch the app
npm run start

```

## Populated Database Data

There are two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
