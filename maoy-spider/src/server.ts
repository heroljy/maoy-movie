import * as express from "express";
import * as log4js from "log4js";
import * as path from "path";
import {CityController} from './controller/CityController';
import {HomeController} from './controller/HomeController';
import {createExpressServer} from "routing-controllers";


export class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = createExpressServer({
        controllers: [CityController, HomeController]
    });
    this.config();
  }
  public config() {
    this.app.use(express.static(path.join(__dirname, "public")));
    log4js.configure("./src/config/log4js.json");    
    this.app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));
  }
}