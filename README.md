# Trexicity Challenge
## Set-up

Install both FE and BE dependencies. I didn't want to `npm eject` so I left the FE files at root level so `react-scripts` can still work.

I'm using `node 14.17.3`

`npm install`

---
## Frontend

Implement a React component that allows a user to manage a list of up to 3 vehicles for a user. 
Each vehicle must have the `make`, `model`, and `year` specified. 
One of the vehicles is required to be identified as the primary vehicle. 
The component should be capable of interfacing with a web service that saves and retrieves the saved vehicles.

`npm run start:web`

http://localhost:3000

---

## Backend

Implement a Nodejs server application using Expressjs. 
There only needs to be one endpoint "/hello" that returns the string "World!" when requested using "GET". 
However, configure the server following Nodejs/Express best practices for security. Lock it down.

`npm run start:server`

http://localhost:3001/hello