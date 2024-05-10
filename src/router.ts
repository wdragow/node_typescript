import { Router } from 'express';

import FirstController from './controllers/FirstController';

const router: Router = Router();

router.get('/', FirstController.helloWorld);

export { router };
