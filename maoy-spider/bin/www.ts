import { Server } from "../src/server";
import * as log4js from "log4js";
import {CityAnalyse} from "../src/maoySpider/CityAnalyse";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {City} from '../src/entity/City';


const app = Server.bootstrap().app;
const logger = log4js.getLogger("bootstrap");

// 连接数据库，并启动服务
createConnection({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "maoyan",
    "synchronize": true,
    "logging": true,
    "entities": [
       "src/entity/**/*.ts"
    ]
 }).then(async connection => {
    const server = app.listen(3000);
    logger.info("Express server listening on port ", server.address().port, " with pid ", process.pid );
    // await new CityAnalyse().analyseCitys().then(data => {
    //     data.map(city => {
    //         connection.manager.save(city)
    //     })
    // })
    
}).catch(error => {
    logger.error("Database connection failure："+error);
});