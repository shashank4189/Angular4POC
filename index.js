import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cookieparser from 'cookie-parser';
import config from 'config';



class Server {
  constructor(app){
    this.app=app;
  }

  setCrossOrigin(){
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  extractBundleJs(){
    this.app.get('/dist/bundle.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });
  }

  extractVendorJs(){
    this.app.get('/dist/vendor.bundle.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });
  }

  setMiddleware(){
    this.app.use(express.static(path.join(__dirname+'/config/dist')));
   // this.app.use(express.static(path.join(__dirname+'/public/swagger')));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cookieparser());
  }

  setStartPage(){
    this.app.route('/*').get(function(req, res) {
      if(req.path==='/swagger'){
        return res.sendFile(path.join(__dirname +'/public/swagger/index.html'));
      } else{
        return res.sendFile(path.join(__dirname+'/config/dist/index.html'));
      }
    });
  }




  /*getAuthRoute(){
    return this.app.use('/api', authMiddleware , apis);
  }*/



  startServer(){
    this.app.listen(config.get('WEB_PORT'), function () {
      console.log('Server runing at ' + config.get('WEB_PORT'));
    });
  }
}

export default Server;







