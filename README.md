\# Project 49 - CI/CD Pipeline



A Node.js web application demonstrating automated CI/CD using GitHub Actions and Docker.



\## Technologies



\- Node.js

\- Express.js

\- Docker

\- GitHub

\- GitHub Actions

\- Docker Hub



\## Application Endpoints



\### Home



GET /



\### Health Check



GET /health



\## CI/CD Pipeline



The GitHub Actions workflow:



1\. Checks out the source code

2\. Sets up Node.js

3\. Installs dependencies

4\. Runs automated tests

5\. Logs into Docker Hub

6\. Builds the Docker image

7\. Pushes the image to Docker Hub



\## Run Locally



```bash

npm install

npm start



Application:

http://localhost:3000



Run with Docker



docker build -t project-49-cicd .

docker run -p 3000:3000 project-49-cicd





