import express from 'express';
import { DisplayLogin, DisplayRegister, ProcessLogin, ProcessLogout, ProcessRegister } from '../Controllers/auth';

const router = express.Router();

/* GET login page. */
router.get('/login', DisplayLogin);
//register page
router.get('/register', DisplayRegister);

//process login
router.post('/login',ProcessLogin);
//process register
router.post('/register',ProcessRegister);
//process logout
router.get('/logout',ProcessLogout);


export default router;