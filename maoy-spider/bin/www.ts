import { Server } from "../src/server";
import * as log4js from "log4js";
import {CityAnalyse} from "../src/maoySpider/CityAnalyse";
import {CinemaSpider} from "../src/maoySpider/CinemaSpider";
import {FilmSpider} from "../src/maoySpider/FilmSpider";
import {createConnection} from "typeorm";
import {FilmService} from '../src/service/FilmService';
import { Film } from '../src/entity/Film';
const app = Server.bootstrap().app;
const logger = log4js.getLogger("bootstrap");


// 连接数据库，并启动服务
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "maoyan",
    synchronize: true,
    logging: true,
    entities: [
       "src/entity/**/*.ts"
    ]
 }).then(async connection => {
    const server = app.listen(3000);
    logger.info("Express server listening on port ", server.address().port, " with pid ", process.pid );
    // new CityAnalyse().saveCitys().then(data => {
    //     logger.info(data);
    // })
    // new CinemaSpider().saveCitys();
    // new FilmSpider().readFilms();
    // new FilmSpider().analyseActors();
    new FilmService('film').query(new Film()).then(res =>{
        console.log(JSON.stringify(res));
    });
}).catch((error) => {
    logger.error("Database connection failure："+error);
});