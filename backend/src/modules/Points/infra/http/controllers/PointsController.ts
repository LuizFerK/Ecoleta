import { container } from 'tsyringe';

import { Request, Response } from 'express';

import CreatePointService from '@modules/Points/services/CreatePointService';
import FindPointService from '@modules/Points/services/FindPointService';
import ListPointsService from '@modules/Points/services/ListPointsService';

export default class PointsController {
  public async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const listPoints = container.resolve(ListPointsService);

    const parsedItems = String(items).split(',').map(item => item.trim());

    const points = await listPoints.execute({
      city: String(city),
      uf: String(uf),
      items: parsedItems,
    });

    response.json(points);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const findPoint = container.resolve(FindPointService);

    const point = await findPoint.execute(id);

    return response.json(point);
  }

  public async create(request: Request, response: Response) {
    const {
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;

    const createPoint = container.resolve(CreatePointService);

    const point = await createPoint.execute({
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    });

    return response.json(point);
  }
}
