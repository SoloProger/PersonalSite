import { Router } from 'express';
import CoreController from '../src/controllers/core.controller';
import Contact from '../database/models/contact';
import Link from '../database/models/link';
import About from '../database/models/about';
import Portfolio from '../database/models/portfolio';

const router = Router();

const contactController = new CoreController;


router.get('/links', (response, request) => contactController.getAll(response, request, Link));
router.get('/contacts', (response, request) => contactController.getAll(response, request, Contact));
router.get('/about', (response, request) => contactController.getAll(response, request, About));
router.get('/portfolio', (response, request) => contactController.getAll(response, request, Portfolio));

export default router;