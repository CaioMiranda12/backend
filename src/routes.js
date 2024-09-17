import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = new Router()

routes.get('/', async (req, res) => {
    return res.status(201).json({message: 'Hello World'})
})

routes.post('/users', UserController.store)

export default routes