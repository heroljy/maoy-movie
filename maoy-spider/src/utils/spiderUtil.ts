import * as superagent from 'superagent';
import * as cheerio from 'cheerio';
import * as http from 'http';
/**
 * 爬虫公共类
 */
export class SpiderUtil {
    constructor() {

    }
    /**
     * @description 通过链接获取网页信息
     * @param url 网页链接
     */
    public getPage(url: string): Promise<superagent.Response>{
        var promise = new Promise<superagent.Response>((resolve, reject) => {
            superagent.get(url)
            .set('User-Agent','Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36')
            .end((err, res) => {
                if(!err){
                    resolve(res);
                }else {
                    reject(err);
                }
            })
        });
        return promise;
    }
    /**
     * @description 通过post请求获取json数据
     * @param url--地址 
     * @param data--表单数据
     * @param refer--来源
     */
    public getJson(url: string, data: object, referer: object, cookie: string): Promise<string>{
        var promise = new Promise<string>((resolve, reject) => {
            const superr = superagent.post(url);
            if(referer){
                superr.set(referer);
            }
            superr.set('User-Agent','Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Cookie',cookie)
            .set('cache-control','no-cache')
            .send(data)
            .end((err, res) => {res.header.cookie
                if(!err){
                    resolve(res.text);
                }else {
                    reject(err);
                }
            })

        })
        return promise;
    }
}