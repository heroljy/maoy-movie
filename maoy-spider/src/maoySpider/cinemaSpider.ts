import {SpiderUtil} from "../utils/spiderUtil";
import {Cinema} from "../entity/Cinema";
import {City} from '../entity/City';
import {CityService} from "../service/CityService";
import {CinemaService} from "../service/CinemaService";
import * as cheerio from 'cheerio';
import * as sleep from 'sleep';
export class CinemaSpider{
    private url: string;// 地址
    private options: object;// form表单信息
    private preReferer: string;// 来源的前半部分
    constructor(){
        this.url= "http://m.maoyan.com/cinemalist?_v_=yes";
        this.options = {offset: 12, limit: 1000};
        this.preReferer = "http://m.maoyan.com/?_v_=yes&city="
    }
    public saveCitys(): Promise<string>{
        const promise = new Promise<string>((resolve,reject) => {
            new CityService("city").query(new City()).then(cities => {
                for(let i = 0;i<cities.length;i++){
                    let city = cities[i];
                    const str = this.preReferer + city.pinyin;
                    new SpiderUtil().getPage(str).then(res => {
                        this.analyseCinema(res.text, city).then(cinemas => {}) 
                    });   
                }
                resolve("Cinema information is updated")
            })
        });
        return promise;
    }
    /**
     * @description 解析电影院信息
     */
    public analyseCinema(text: string, ct: City): Promise<Cinema[]>{
        const promise = new Promise<Cinema[]>((resolve,reject) => {
            let cinemaArr:Cinema[] = [];
            const $ = cheerio.load(text);
            let cinemaName = $('#tab_cinema .cinemalist .cinema-container .cinema-name');
            if(cinemaName && cinemaName.length > 0){
                let price = $('#tab_cinema .cinemalist .cinema-container .price .num');
                let address = $('#tab_cinema .cinemalist .cinema-container .address');
                let tagList = $('#tab_cinema .cinemalist .cinema-container .tag-list');
                for(let i = 0;i < cinemaName.length; i++){
                    const cinema = new Cinema();
                    cinema.name = cinemaName[i].children[0].data;
                    cinema.address = address[i].children[0].data;
                    cinema.price = price[i]?price[i].children[0].data : '';
                    cinema.labels = tagList[i]?tagList[i].children[0].data : '';
                    cinema.lat = 0;
                    cinema.lng = 0;
                    cinema.cityId = ct.id;
                    new CinemaService('cinema').add(cinema);
                    cinemaArr.push(cinema);
                }
            }
            // console.log('名字   ' + $('#tab_cinema .cinemalist .cinema-container .cinema-name').html());
            // console.log('价格    ' + $('#tab_cinema .cinemalist .cinema-container .price .num').html());
            // console.log('地址    ' + $('#tab_cinema .cinemalist .cinema-container .address').html());
            // console.log('标签    ' + $('#tab_cinema .cinemalist .cinema-container .tag-list').text());
            // const cinema = new Cinema();
            // cinema.name = $('#tab_cinema .cinemalist .cinema-container .cinema-name').html();
            // cinema.address = $('#tab_cinema .cinemalist .cinema-container .address').html();
            // cinema.price = $('#tab_cinema .cinemalist .cinema-container .price .num').html();
            // if(cinema.price){
            //     cinema.price = '';
            // }
            // cinema.labels = $('#tab_cinema .cinemalist .cinema-container .tag-list').text().replace(/\r\n\t\s/g,'');
            // cinema.cityId = ct.id;
            // cinema.lat = 0;
            // cinema.lng = 0;
            // cinemaArr.push(cinema);
            // new CinemaService('cinema').add(cinema);
            resolve(cinemaArr);
            // new SpiderUtil().getJson(this.url, this.options, reperer, cityId).then((dd) => {
            //     new SpiderUtil().getJson(this.url, this.options, reperer, cityId).then((data) => {
            //         const cinemas = JSON.parse(data).cinemas;
            //         cinemas.map(ci => {
            //             const cinema = new Cinema();
            //             cinema.name = ci.nm;
            //             cinema.address = ci.addr;
            //             cinema.price = ci.price;
            //             cinema.lat = ci.lat;
            //             cinema.lng = ci.lng;
            //             cinema.labels = "";
            //             ci.labels.map(label => {
            //                 ("退" !== label && "改签" !== label && "小吃" !== label && "折扣卡" !== label) && (cinema.labels += (label+","));
            //             });
            //             cinemaArr.push(cinema);
            //         })
            //         resolve(cinemaArr);
            //     })
            // })
        });
        return promise;
    }
}