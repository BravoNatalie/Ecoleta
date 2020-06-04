import express, { response } from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//index(listagem), show(mostrar 1 elemento), create, update, delete

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
