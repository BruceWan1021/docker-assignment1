## Docker Assignment - Agile Software Practice.

__Name:__ Zhenyang Wan

__Demo:__ https://youtu.be/gph95u85EDY

This repository contains the containerization of the mukti-container application illustrated below.

![](./images/arch.png)

### Database Seeding.

To implement database seeding, I created a seed.js script and configured Dockerfile-seeder to automate the process. This setup copies the necessary files into the virtual space within the container, where the script runs automatically to deploy data to the database. Using Mongoose, I structured the data models and seeded them into MongoDB. Importantly, this script only executes when the application is launched in the development environment to avoid unnecessary data seeding in production.

### M.ulti-Stack.

The project supports both development and production stacks by separating Docker Compose files:

Development Stack: This configuration includes all services, enabling convenient debugging and automatic database seeding for the development period.
Production Stack: The production configuration excludes mongo-express and seeder services. This setup omits unnecessary services to ensure optimal stability and efficiency in the production environment.

###Running the Project

####Prerequisites
Docker and Docker Compose installed on your machine.

####Development Environment
Clone the repository to your local machine:

#####Prerequisites
Docker and Docker Compose installed on your machine.
Node.js

To install Mongoose, you can run: npm install mongoose

#####Development Environment

Run the following command to start the development stack, which includes all services and automatically seeds the database:
docker-compose up

Access the application through the port Mongo Express at http://localhost:8081.

#####Production Environment
To run the application in a production environment without seeding the database and unnecessary services, use the following command:
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
Verify that the application is running by checking the logs.