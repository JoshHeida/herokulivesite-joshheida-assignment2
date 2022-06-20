//auth.ts josh heida 300644912 June 20 2022
import express from 'express';
import { DisplayLogin, ProcessLogin, ProcessLogout } from '../Controllers/auth';

const router = express.Router();

/* GET login page. */
router.get('/login', DisplayLogin);


//process login
router.post('/login',ProcessLogin);

//process logout
router.get('/logout',ProcessLogout);


export default router;