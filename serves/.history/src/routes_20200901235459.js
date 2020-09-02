import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controller/UserController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/products', UserController.store);
routes.put('/users', UserController.update);

export default routes;
