import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

@Controller()
export class HomeController {
    @Get("/")
    home(){
        return "hello world";
    }
}