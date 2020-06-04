import ICreatePointDTO from '@modules/Points/dtos/ICreatePointDTO';
import IFilterDTO from '@modules/Points/dtos/IFilterDTO';
import Point from '@modules/Points/infra/typeorm/entities/Point';

export default interface IPointsRepository {
  create(data: ICreatePointDTO): Promise<Point>;
  findById(id: string): Promise<Point>;
  findAll(): Promise<Point[]>;
}
