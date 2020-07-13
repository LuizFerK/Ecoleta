import express from 'express';

import itemsRouter from '@modules/Items/infra/http/routes/items.routes';
import pointsRouter from '@modules/Points/infra/http/routes/points.routes';

const routes = express.Router();

routes.use('/items', itemsRouter);
routes.use('/points', pointsRouter);

export default routes;
