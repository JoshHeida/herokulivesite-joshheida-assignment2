import express from "express";
import User from "../Models/user";
import passport from "passport";


//Display
export function DisplayLogin(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Login', page:'login', messages: req.flash('loginMessage'), displayName: ''});
}

export function DisplayRegister(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title:'Register', page:'register', messages: req.flash('registerMessage'), displayName: ''});
}
//Process
export function ProcessLogin(req: express.Request, res: express.Response, next: express.NextFunction)
{
  passport.authenticate('local',function(err, user, info)
  {
    if (err)
    {
        console.error(err);
        res.end(err);
    }

    if(!user)
    {
        req.flash('loginMessage','Invalid Username or Password');
        return res.redirect('/login');
    }

    req.logIn(user, function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        return res.redirect('/buisness-contacts');
    });
  })(req, res, next);
}
export function ProcessRegister(req: express.Request, res: express.Response, next: express.NextFunction)
{
  
}
export function ProcessLogout(req: express.Request, res: express.Response, next: express.NextFunction)
{

}



