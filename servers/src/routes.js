import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controller/SessionController';
import UserController from './app/controller/UserController';

import ProductController from './app/controller/ProductController';
import FileController from './app/controller/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);

routes.put('/products/:id', ProductController.updateProduct);
routes.post('/products/new', ProductController.store);
routes.get('/products', ProductController.getAll);
routes.get('/products/:id', ProductController.getById);
routes.post('/product/avatar', ProductController.updateProduct);
routes.delete('/products/:id', ProductController.deleteProduct);

export default routes;
