const path = require('path'); // path: la ubicacion del proyecto
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

module.exports = { //module.export: la info de nuestra configuracion webpack
    name: 'express-server', //name: nombre del proyecto
    entry: './src/index.ts', // entry: punto de entrada de nuestra aplicacion
    target: 'node',
    mode: NODE_ENV, // AÑADIMOS: mode
    externals: [nodeExternals()],
    output: { //output: donde guardamos el recurso que fue modularizado por webpack
        path: path.resolve(__dirname, 'dist'), 
        //path: ubicacion del guardado
        //__dirname: donde esta el proyecto en el Sistema Operativo
        // 'dist'(distribution): nombre del folder, si no existe entonces creara dist
        filename: 'index.js', //filename: como llamar a la aplicacion cuando se prepare para produccion
    },
    resolve: {
        // extensions: con que extensiones trabajaremos
        extensions: ['.ts','.js']
    },
    module: {
        rules: [ 
            //rules: reglas con las que trabajaremos en el proyecto
            // se asigna a cada loader(optimizador), con que tipo de archivo trabajara y con que reglas
            {
                test: /\.(js)$/, // Identificamos las extenciones en las que estareamos aplicando el loader
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // Utilizamos el loader
                }
            },
            {
                test: /\.ts$/, // Identificamos las extenciones en las que estareamos aplicando el loader
                use: [
                    'ts-loader', // Utilizamos el loader
                ]
            }
        ]
    }
}