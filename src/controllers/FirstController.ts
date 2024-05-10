import { Request, Response } from 'express';

class FirstController {
  async helloWorld(req: Request, res: Response) {
    return res.status(200).json({
      message: 'Hello world!',
    });
  }
}

export default new FirstController();
