import express from 'express';

import ItemsController from '@modules/Items/infra/http/controllers/ItemsController';
import PointsController from '@modules/Points/infra/http/controllers/PointsController';

const routes = express.Router();

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;
