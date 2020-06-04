import { inject, injectable } from 'tsyringe';

import IPointsRepository from '../repositories/IPointsRepository';
import Point from '../infra/typeorm/entities/Point';

import IFilterDTO from '@modules/Points/dtos/IFilterDTO';

@injectable()
class ListPointsRepository {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute({ city, uf, items }: IFilterDTO): Promise<Point[]> {
    const allPoints = await this.pointsRepository.findAll();

    let findPoints: Point[] = [];
    let distinct: string;

    allPoints.forEach(point => {
      items.forEach(item => {
        point.point_items.forEach(pointItem => {
          if (pointItem.item.id === Number(item) && distinct !== point.id) {
            findPoints.push(point);
            distinct = point.id;
          }
        });
      })
    })

    return findPoints;
  }
}

export default ListPointsRepository;
