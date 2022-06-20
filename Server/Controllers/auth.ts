//auth.ts josh heida 300644912 June 20 2022
import express from "express";
import User from "../Models/user";
import passport from "passport";
import { UserDisplayName } from "../Util";


//Display
export function DisplayLogin(req: express.Request, res: express.Response, next: express.NextFunction)
{
    if(!req.user){
    return res.render('index',{title:'Login', page:'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)});
    }
        return res.redirect('/buisness-contacts')
    
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

export function ProcessLogout(req: express.Request, res: express.Response, next: express.NextFunction)
{
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }
        console.log("User Logged Out")
    });
    res.redirect('/login');

}



