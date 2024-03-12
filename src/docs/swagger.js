const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description:
                'This is a simple CRUD API application made with Express and documented with Swagger'
        },
    },
    apis: ['./src/router/v1/*.js'],
}

const swaggerSpec = swaggerJSDOC(options);

const swaggerDocs = (app, port) => {
    app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`Version 1 de Swagger http://localhost:${port}/api/v1`);
}

module.exports = { swaggerDocs };