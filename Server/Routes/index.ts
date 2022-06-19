import express from 'express';

const router = express.Router();
//import controller
import {DisplayAbout, DisplayContact, DisplayHome, DisplayProjects, DisplayServices} from "../Controllers/index";
/* GET home page. */
router.get('/', DisplayHome);

router.get('/home', DisplayHome);
//about page
router.get('/about',DisplayAbout);
//services page
router.get('/services',DisplayServices);
//projects page
router.get('/projects',DisplayProjects);
//contact page
router.get('/contact',DisplayContact);

export default router;
