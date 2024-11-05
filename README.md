## Docker Assignment - Agile Software Practice.

__Name:__ Zhenyang Wan

__Demo:__ .... The link to your YouTube demonstration ....

This repository contains the containerization of the mukti-container application illustrated below.

![](./images/arch.png)

### Database Seeding.

To realize database seeding, I use seed.js to Automatically deploy database following the Dockerfile-seeder which will copy the file needed to a virtual space to excute.  To make the data in database readable, I set the model. I use mongoose to deploy data into MongoDB.
The script is only excuted when the application is launched in development period.

### M.ulti-Stack.

Building development and production stack options by separating Docker Compose files

Development stack: This stack includes all the services with configuration which is convenient for debugging, and automatic seeding database during development period.
Production stack: This stack doesn't include mongo-express and seeder services. In this stack, it will not excute unnecessary services to improve the production environemnt stablility. 
