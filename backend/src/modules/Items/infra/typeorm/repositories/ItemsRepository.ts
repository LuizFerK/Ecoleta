import { Repository, getRepository } from 'typeorm';

import IItemsRepository from '@modules/Items/repositories/IItemsRepository';
import Item from '../entities/Item';

export default class ItemsRepository implements IItemsRepository {
  private ormRepository: Repository<Item>

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async findAll(): Promise<Item[]> {
    const items = await this.ormRepository.find();

    return items;
  }
}
