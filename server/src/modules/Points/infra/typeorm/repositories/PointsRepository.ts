import { Repository, getRepository } from 'typeorm';
import { uuid } from 'uuidv4';

import IPointsRepository from '@modules/Points/repositories/IPointsRepository';
import Point from '../entities/Point';
import ICreatePointDTO from '@modules/Points/dtos/ICreatePointDTO';
import IFilterDTO from '@modules/Points/dtos/IFilterDTO';

export default class PointsRepository implements IPointsRepository {
  private ormRepository: Repository<Point>

  constructor() {
    this.ormRepository = getRepository(Point);
  }

  public async findAll(): Promise<Point[]> {
    const points = await this.ormRepository.find();

    return points;
  }

  public async findById(id: string): Promise<Point> {
    const point = await this.ormRepository.findOne(id);

    return point;
  }

  public async create(data: ICreatePointDTO): Promise<Point> {
    const point_id = uuid();

    const pointItemsData = data.items.map(item_id => {
      return {
        item_id,
        point_id,
      }
    })

    const pointItems = this.ormRepository.create({
      ...data,
      id: point_id,
      point_items: pointItemsData,
    })

    await this.ormRepository.save(pointItems);

    return pointItems;
  }
}
