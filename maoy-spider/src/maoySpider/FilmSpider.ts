import {FileUtil} from '../utils/fileUtil'
import {SpiderUtil} from "../utils/spiderUtil";
import * as cheerio from 'cheerio';
import * as log4js from "log4js";
const logger = log4js.getLogger("CityAnalyse");
export class FilmSpider{

    constructor() {

    }
    readFilms() {
        FileUtil.readFile(__dirname + '/film.json').then(data => {
            const filmJson = JSON.parse(data);
            filmJson.map(filmUrl => {
                new SpiderUtil().getPage(filmUrl).then(res => {
                    this.analyseFilm(res['res']['text'])
                })
            })
        })
    }
    analyseFilm(html: string){
        const $ = cheerio.load(html);
        console.log('电影图片: '+$('.movie-container .img').attr('src'));
        console.log('电影名称: '+$('.movie-container .movie-name').children('span')[1].children[0].data);
        console.log('电影外文名称: '+$('.movie-container .movie-ename')[0].children[0].data);
        console.log('电影评分: '+$('.movie-container .released-score .rating span')[0].children[0].data);
        console.log('电影评价人数: '+$('.movie-container .released-score .score-num span')[1].children[0].data);
        console.log('电影类型: '+$('.movie-container .movie-category .movie-cat')[0].children[0].data);
        console.log('上映信息: '+$('.movie-container .movie-category .movie-cat')[0].children[0].data);
        
    }
}