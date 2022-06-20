import express from "express";

import buisnessContacts from "../Models/buisContact";
import { UserDisplayName } from "../Util";
export function DisplayBuisContacts(req: express.Request, res: express.Response, next: express.NextFunction)
{
    buisnessContacts.find(function(err,contactColl)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Buisness Contacts', page: 'buisness-contacts', contacts: contactColl,displayName:  UserDisplayName(req)})
    });
}