import {Router} from 'express';
import {csvController} from './index';

import {uploadMiddleware} from '../middleware/uploadHandler';

const csvRouter = Router();

//
csvRouter.post('/', uploadMiddleware, csvController.parseDataFromFilePath);

export default csvRouter;
