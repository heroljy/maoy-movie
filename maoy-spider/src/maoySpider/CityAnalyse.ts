import {FileUtil} from '../utils/fileUtil'
import {City} from '../entity/City';
import * as path from "path";
import * as log4js from "log4js";
import {CityService} from "../service/CityService"
const logger = log4js.getLogger("CityAnalyse");

/** 
 * 地市页面解析类
 */
export class CityAnalyse{
    private cityService: CityService;
    constructor(){    
        this.cityService = new CityService("city");
    }
    public saveCitys(): Promise<string>{
        const promise = new Promise<string>((resolve,reject) => {
            this.analyseCitys().then(data => {
                data.map(city => {
                    this.cityService.add(city);
                });
                resolve('City information is updated');
            });
        });
        return promise;
    }
    public analyseCitys(): Promise<City[]>{
        const promise = new Promise<City[]>((resolve,reject) => {
            let cities:City[] = [];
            FileUtil.readFile(__dirname + '/cities.json').then(data => {
                const cityJson = JSON.parse(data);
                for(let key in cityJson.citys){
                    const cc = cityJson.citys[key];
                    cc.map(c => {
                        let city = new City();
                        city.name = c.name;
                        city.cityId = c.id;
                        city.pinyin = c.pinyin;
                        city.rank = c.rank;
                        city.acronym = c.acronym;
                        city.chineseFullName = c.chineseFullName;
                        city.lat = c.position.lat;
                        city.lng = c.position.lng;
                        city.hot = '0';
                        cities.push(city);
                    })
                }
                cityJson.hot.map(h => {
                    for(let i=0;i<cities.length;i++){
                        const city = cities[i];
                        if(h.name === city.name){
                            city.hot = '1';
                        }
                    }
                });
                resolve(cities);
            });
        })
        return promise;
    }
}