const express = require('express');
const router = require('../router/v1')
const { swaggerDocs: V1SwaggerDocs } = require('../docs/swagger');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.midllewares();
        this.router();

    }

    midllewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    router() {
        this.app.use('/api', router);
    }

    start() {
        this.app.listen(this.port, () => {
            V1SwaggerDocs(this.app, this.port);
            console.log('Server on port', this.port);
        });
    }

}

module.exports = Server;