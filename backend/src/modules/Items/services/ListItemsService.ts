import { inject, injectable } from 'tsyringe';

import Item from '../infra/typeorm/entities/Item';
import IItemsRepository from '../repositories/IItemsRepository';

@injectable()
class ListItemsService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute(): Promise<Item[]> {
    const items = await this.itemsRepository.findAll();

    const serializedItems = items.map(item => {
      return {
        ...item,
        image: `http://192.168.10.115:3333/uploads/${item.image}`,
      }
    })

    return serializedItems;
  }
}

export default ListItemsService;
