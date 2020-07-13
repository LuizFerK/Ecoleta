import { inject, injectable } from 'tsyringe';

import IPointsRepository from '../repositories/IPointsRepository';
import Point from '../infra/typeorm/entities/Point';

@injectable()
class FindPointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(id: string): Promise<Point> {
    const point = await this.pointsRepository.findById(id);

    return point;
  }
}

export default FindPointService;
