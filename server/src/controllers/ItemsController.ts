import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
  async index(request: Request, response: Response) {
    const uri = '192.168.1.31';
    const items = await knex('items').select('*'); // SELECT * FROM items
    
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://${uri}:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;