import connectDB from '../DB/connection.js'
import URLRouter from './modules/URL/url.router.js'

import { globalErrorHandling } from './utils/errorHandling.js'

import cors from 'cors'


const initApp = (app, express) => {
    app.use(cors({}))

    app.get('/', (req, res, next) => {
        res.send("Welcom to our project")
    })
    app.use(express.json({}))
    app.use(`/url`, URLRouter)

    app.all('*', (req, res, next) => {
        res.send("In-valid Routing Plz check url  or  method")
    })
    app.use(globalErrorHandling)

    connectDB()

}



export default initApp