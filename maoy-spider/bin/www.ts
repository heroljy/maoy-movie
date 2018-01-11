import { Server } from "../src/server";
import * as log4js from "log4js";


let app = Server.bootstrap().app;
let logger = log4js.getLogger('bootstrap');

const server = app.listen(3000, "localhost", () => {
    let addr = server.address();
    logger.info("Express server listening on port ", addr.port, " with pid ", process.pid );
});
