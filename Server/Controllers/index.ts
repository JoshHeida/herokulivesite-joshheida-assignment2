import express from "express";
import { UserDisplayName } from "../Util";
export function DisplayHome(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home' , page:'home',displayName: UserDisplayName(req)})
}

export function DisplayAbout(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'About', page:'about',displayName: UserDisplayName(req)})
}
export function DisplayServices(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Services', page:'services',displayName: UserDisplayName(req)})
}
export function DisplayProjects(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Projects', page:'projects',displayName: UserDisplayName(req)})
}
export function DisplayContact(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Contact', page:'contact',displayName: UserDisplayName(req)})
}



