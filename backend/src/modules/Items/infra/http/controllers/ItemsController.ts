import { container } from 'tsyringe';

import { Request, Response } from 'express';

import ListItemsService from '@modules/Items/services/ListItemsService';

export default class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listItems = container.resolve(ListItemsService);

    const items = await listItems.execute();

    return response.json(items);
  }
}
