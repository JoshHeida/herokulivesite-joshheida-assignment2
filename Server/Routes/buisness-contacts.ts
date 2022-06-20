import express from 'express';
const router = express.Router();
import { AuthGuard } from '../Util';
import {DisplayBuisContacts} from '../Controllers/buisness-contacts'

router.get('/buisness-contacts', AuthGuard, DisplayBuisContacts);

export default router;