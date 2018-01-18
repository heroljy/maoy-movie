import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {CityService} from '../service/CityService'
import {City} from '../entity/City';
@JsonController()
export class CityController {
    private cityService: CityService; 
    constructor(){
        this.cityService = new CityService('city');
    }
    @Get('/cities')
    queryCities(){
        return this.cityService.query(new City());
    }
}