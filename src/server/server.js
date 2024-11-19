const express = require('express')
// 'path' permite acceder a las carpetas del proyecto de Node JS
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public' } = options

    const app = express()

    // Para poder utilizar middlewares en express se debe utilizarel método use
    // Middleware para ofrecer contenido estático
    app.use(express.static(public_path))

    // Ante cualquier petición entrante hecha con get se devuelve index.html porque ofrecemos una SPA
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    // Escucha en un puerto las peticiones entrantes
    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
}

module.exports = {
    startServer
}