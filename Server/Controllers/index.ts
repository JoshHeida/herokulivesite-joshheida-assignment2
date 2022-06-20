import express from "express";

export function DisplayHome(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home' , page:'home',displayName: ''})
}

export function DisplayAbout(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'About', page:'about',displayName: ''})
}
export function DisplayServices(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Services', page:'services',displayName: ''})
}
export function DisplayProjects(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Projects', page:'projects',displayName: ''})
}
export function DisplayContact(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Contact', page:'contact',displayName: ''})
}



