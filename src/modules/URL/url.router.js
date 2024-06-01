import { Router } from "express";
import * as ControllerURL from './controller/urlWebsites.js'

const router = Router()


router.get('/GetAllurl',ControllerURL.GetAllURLS)


router.post('/addURL',
ControllerURL.addURL)


router.delete('/deleteURL/:URlId',
ControllerURL.deleteURL)


export default router