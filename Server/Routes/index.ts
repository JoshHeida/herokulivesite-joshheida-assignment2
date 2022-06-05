import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home' , page:'home'});
});
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home' ,page:'home'});
});
//about page
router.get('/about',function(req: express.Request, res: express.Response, next: express.NextFunction){
  res.render('index',{title:'About', page:'about'})
})
//services page
router.get('/services',function(req: express.Request, res: express.Response, next: express.NextFunction){
  res.render('index',{title:'Services', page:'services'})
})
//projects page
router.get('/projects',function(req: express.Request, res: express.Response, next: express.NextFunction){
  res.render('index',{title:'Projects', page:'projects'})
})
//contact page
router.get('/contact',function(req: express.Request, res: express.Response, next: express.NextFunction){
  res.render('index',{title:'Contact', page:'contact'})
})

export default router;
