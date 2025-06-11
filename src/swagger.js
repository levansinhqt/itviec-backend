// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express CRUD API',
      version: '1.0.0',
      description: 'A simple CRUD API with ExpressJS and Swagger',
    },
    servers: [
      {
        url: 'http://localhost:8000/api/v1',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
