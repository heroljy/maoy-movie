import { Server } from "../src/server";
import * as log4js from "log4js";
import {Spider} from '../src/utils/spider';

let app = Server.bootstrap().app;
let logger = log4js.getLogger('bootstrap');

const server = app.listen(3000, "localhost", () => {
    let addr = server.address();
    logger.info("Express server listening on port ", addr.port, " with pid ", process.pid );
});

var spider = new Spider()
// spider.getPage('http://m.maoyan.com/city?_v_=yes').then(data => {
//     logger.info(data);
// });
spider.getJson('http://m.maoyan.com/movielist?_v_=yes',{offset: 0, limit: 100}).then(data => {
    logger.info(data);
});