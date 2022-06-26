const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        /** Middlewares */
        this.middlewares();
        /**Rutas de mi aplicación */
        this.routes();
    }

    /** Método para definir las rutas */
    routes() {

        /** Para poder utilizar las rutas definidas en routes/user, se crea una especie de middleware */
        this.app.use(this.usuariosPath,require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // lectura y parseo del body - para recibir datos en formato json, o aquellos se enviaro desde una aplicación como FORM
        this.app.use( express.json() );

        /**Directorio publico */
        this.app.use( express.static('public') )

    }
}

module.exports = Server;