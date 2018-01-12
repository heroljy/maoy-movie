import {SpiderUtil} from "../utils/spiderUtil";
import {Cinema} from "../entity/Cinema";
import {City} from '../entity/City';

export class CinemaSpider{
    private url: string;// 地址
    private options: object;// form表单信息
    private preReferer: object;// 来源的前半部分
    constructor(){
        this.url= "http://m.maoyan.com/cinemalist?_v_=yes";
        this.options = {offset: 12, limit: 1000};
        this.preReferer = {Referer: "http://m.maoyan.com/?_v_=yes&city="}
    }
    /**
     * @description 解析电影院信息
     */
    public analyseCinema(): Promise<Cinema[]>{
        const promise = new Promise<Cinema[]>((resolve,reject) => {
            let cinemaArr:Cinema[] = [];
            new SpiderUtil().getJson(this.url, this.options, this.preReferer).then((data) => {
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
        });
        return promise;
    }

}