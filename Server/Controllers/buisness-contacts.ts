import express from "express";

import buisnessContacts from "../Models/buisContact";
import { UserDisplayName } from "../Util";
export function DisplayBuisContacts(req: express.Request, res: express.Response, next: express.NextFunction): void
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

export function DisplayAdd(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index',{title: 'Add', page:'edit',contacts: '', displayName:UserDisplayName(req)})
}

export function DisplayEdit(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;

    buisnessContacts.findById(id,{},{}, function(err,contactEdit)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Edit', page:'edit',contacts: contactEdit, displayName:UserDisplayName(req)})
    })
}
export function ProcessAdd(req: express.Request, res: express.Response, next: express.NextFunction): void
{

}
export function ProcessEdit(req: express.Request, res: express.Response, next: express.NextFunction): void
{

}
export function ProcessDelete(req: express.Request, res: express.Response, next: express.NextFunction): void
{

}