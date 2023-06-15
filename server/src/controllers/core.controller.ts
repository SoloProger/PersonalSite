import { Request, Response } from 'express';
import CoreSerializer from '../serializers/core.serializer';

export default class CoreController {

  constructor() {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(request: Request, response: Response, model: any): Promise<any> {
    const result = await model.findAll();
    return response.json(CoreSerializer.transform(result));
  }
}