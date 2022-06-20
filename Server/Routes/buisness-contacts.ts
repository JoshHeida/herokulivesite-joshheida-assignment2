//Josh Heida 300644912 June 20 2022
import express from 'express';
const router = express.Router();
import { AuthGuard } from '../Util';
import {DisplayAdd, DisplayBuisContacts, DisplayEdit, ProcessAdd, ProcessDelete, ProcessEdit} from '../Controllers/buisness-contacts'
//Display Buisness Contacts
router.get('/buisness-contacts', AuthGuard, DisplayBuisContacts);
//Display Edit Page
router.get('/edit/:id', AuthGuard, DisplayEdit);
//Display Add Page
router.get('/add',AuthGuard, DisplayAdd);
//Process Edit
router.post('/edit/:id',AuthGuard,ProcessEdit);
//process Add
router.post('/add',AuthGuard,ProcessAdd);
//process Delete
router.post('/delete',AuthGuard,ProcessDelete);

export default router;