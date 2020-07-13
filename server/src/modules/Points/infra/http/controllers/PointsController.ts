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

    const serializedPoint = points.map(point => {
      return {
        image_url: `http://192.168.10.115:3333/uploads/${point.image}`,
        ...point,
      }
    })

    response.json(serializedPoint);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const findPoint = container.resolve(FindPointService);

    const point = await findPoint.execute(id);

    const serializedPoint = {
      image_url: `http://192.168.10.115:3333/uploads/${point.image}`,
      ...point,
    }

    return response.json(serializedPoint);
  }

  public async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;

    const formatedItems = items.split(', ');

    const createPoint = container.resolve(CreatePointService);

    const point = await createPoint.execute({
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items: formatedItems,
    });

    return response.json(point);
  }
}
