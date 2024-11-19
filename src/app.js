import {envs} from './config/env.js'
import { startServer } from './server/server.js'

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnóstica (sin nombre) autoconvocada (se ejecuta directamente con los paréntesis)
// Esto se hace, para que cada vez que se llame a main se lo haga de forma asíncrona
(async () => {
    main()
})()