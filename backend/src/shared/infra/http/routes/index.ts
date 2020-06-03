import express from 'express';

import itemsRouter from '@modules/Items/infra/http/routes/items.routes';

const routes = express.Router();

routes.use('/items', itemsRouter);

export default routes;
