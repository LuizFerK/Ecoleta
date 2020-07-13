import { container } from 'tsyringe';

import IItemsRepository from '@modules/Items/repositories/IItemsRepository';
import ItemsRepository from '@modules/Items/infra/typeorm/repositories/ItemsRepository';

import IPointsRepository from '@modules/Points/repositories/IPointsRepository';
import PointsRepository from '@modules/Points/infra/typeorm/repositories/PointsRepository';

container.registerSingleton<IItemsRepository>(
  'ItemsRepository',
  ItemsRepository,
);

container.registerSingleton<IPointsRepository>(
  'PointsRepository',
  PointsRepository,
);
