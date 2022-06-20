import express from 'express';
const router = express.Router();

import {DisplayBuisContacts} from '../Controllers/buisness-contacts'

router.get('/buisness-contacts',DisplayBuisContacts);

export default router;