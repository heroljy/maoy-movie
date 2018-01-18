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
        if($('.movie-container .movie-score .released-score').length > 0){
            console.log('电影评分: '+$('.movie-container .movie-score .released-score .rating span')[0].children[0].data);
            console.log('电影评价人数: '+$('.movie-container .movie-score .released-score .score-num span')[1].children[0].data);
        }else if($('.movie-container .movie-score .noreleased-score').length > 0){
            console.log('点映评分 :'+$('.movie-container .movie-score .noreleased-score .score')[0].children[0].data)
            console.log('电影评价人数: '+$('.movie-container .movie-score .noreleased-score .score-num span')[1].children[0].data);
            console.log('想看人数: '+$('.movie-container .movie-score .noreleased-score .wish-num span')[0].children[0].data);
        }else if($('.movie-container .movie-score .noreleased-noscore').length > 0){
            console.log('想看人数: '+$('.movie-container .movie-score .noreleased-noscore .wish-num span')[0].children[0].data);
        }else if($('.movie-container .movie-score .released-noscore').length > 0){
            console.log('暂无评分: '+$('.movie-container .movie-score .released-noscore')[0].children[0].data);
        }
        console.log('电影类型: ' + $('.movie-container .movie-category .movie-cat')[0].children[0].data);
        console.log('国家: ' + $('.movie-container .movie-content-row')[0].children[0].children[0].data);
        console.log('时长:' + $('.movie-container .movie-content-row')[0].children[2].children[0].children[0].data)
        console.log('大陆上映时间:' + $('.movie-container .movie-content-row')[1].children[0].data) 
        console.log('描述信息：'+$('.section-expander div')[1].children[0].children[0].data)  
        console.log('--------------------------------------------\r\n')     
    }
}