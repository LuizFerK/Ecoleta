import { inject, injectable } from 'tsyringe';

import ICreatePointDTO from '@modules/Points/dtos/ICreatePointDTO';
import IPointsRepository from '../repositories/IPointsRepository';
import Point from '../infra/typeorm/entities/Point';

@injectable()
class CreatePointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(data: ICreatePointDTO): Promise<Point> {
    const point = await this.pointsRepository.create(data);

    return point;
  }
}

export default CreatePointService;
