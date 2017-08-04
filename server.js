import express from 'express';
import Server from './index'

let app=express();
let server=new Server(app);
server.setCrossOrigin();
server.extractBundleJs();
server.extractVendorJs();
server.setMiddleware();
server.setStartPage();
server.startServer();