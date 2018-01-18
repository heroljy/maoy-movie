import {SpiderUtil} from "../utils/spiderUtil";
import {Cinema} from "../entity/Cinema";
import {City} from '../entity/City';
import {CityService} from "../service/CityService";
import {CinemaService} from "../service/CinemaService";
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
                const str = this.preReferer + cities[21].pinyin;
                new SpiderUtil().getPage(str).then(res => {
                    const uuid = res.header['set-cookie'][6].split(" ")[0]
                    const refer = {Referer: str}
                    this.analyseCinema(refer, uuid+" revrev=76338a29; _lx_utm=utm_source%3Dbaidu%26utm_medium%3Dorganic; ci=602").then(cinemas => {
                        console.log(cinemas)
                    }) 
                });
                // cities.map(city => {
                // })
                resolve("Cinema information is updated")
            })
        });
        return promise;
    }
    /**
     * @description 解析电影院信息
     */
    public analyseCinema(reperer: object,cityId: string): Promise<Cinema[]>{
        const promise = new Promise<Cinema[]>((resolve,reject) => {
            let cinemaArr:Cinema[] = [];
            new SpiderUtil().getJson(this.url, this.options, reperer, cityId).then((dd) => {
                new SpiderUtil().getJson(this.url, this.options, reperer, cityId).then((data) => {
                    const cinemas = JSON.parse(data).cinemas;
                    cinemas.map(ci => {
                        const cinema = new Cinema();
                        cinema.name = ci.nm;
                        cinema.address = ci.addr;
                        cinema.price = ci.price;
                        cinema.lat = ci.lat;
                        cinema.lng = ci.lng;
                        cinema.labels = "";
                        ci.labels.map(label => {
                            ("退" !== label && "改签" !== label && "小吃" !== label && "折扣卡" !== label) && (cinema.labels += (label+","));
                        });
                        cinemaArr.push(cinema);
                    })
                    resolve(cinemaArr);
                })
            })
        });
        return promise;
    }

}