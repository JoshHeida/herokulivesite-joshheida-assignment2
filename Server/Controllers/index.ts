import express from "express";

export function DisplayHome(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home' , page:'home'})
}

export function DisplayAbout(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'About', page:'about'})
}
export function DisplayServices(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Services', page:'services'})
}
export function DisplayProjects(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Projects', page:'projects'})
}
export function DisplayContact(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Contact', page:'contact'})
}

//Temp

import buisnessContacts from "../Models/buisContact";

export function DisplayBuisContacts(req: express.Request, res: express.Response, next: express.NextFunction)
{
    buisnessContacts.find(function(err,contactColl)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Buisness Contacts', page: 'buisness-contacts', contacts: contactColl})
    });
}