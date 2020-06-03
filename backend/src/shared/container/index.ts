import { container } from 'tsyringe';

import IItemsRepository from '@modules/Items/repositories/IItemsRepository';
import ItemsRepository from '@modules/Items/infra/typeorm/repositories/ItemsRepository';

container.registerSingleton<IItemsRepository>(
  'ItemsRepository',
  ItemsRepository,
);
