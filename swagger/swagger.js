const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-Market API',
      version: '1.0.0',
      description: 'Documentation de l\'API pour E-Market',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Development server' }
    ],
  },
  apis: [path.join(__dirname, '../routes/*.js')],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
