import Item from '../infra/typeorm/entities/Item';

export default interface IItemsRepository {
  findAll(): Promise<Item[]>;
}
