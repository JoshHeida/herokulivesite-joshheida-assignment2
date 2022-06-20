import express from "express";

export function UserDisplayName(req: Express.Request): string
{
    if(req.user){
        let user = req.user as userDocument;
        return user.username.toString();
    }
    return ''
;}

export function AuthGuard(req:express.Request, res: express.Response, next: express.NextFunction)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('login');
    }
    next();
}