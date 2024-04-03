import {Router} from 'express';
import {csvController} from './index';

const csvRouter = Router();

//
csvRouter.get('/csv', csvController.parseCsv);

export default csvRouter;
