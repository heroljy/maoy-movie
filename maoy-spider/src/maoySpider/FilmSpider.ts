import {FileUtil} from '../utils/fileUtil'
import {SpiderUtil} from "../utils/spiderUtil";
import * as cheerio from 'cheerio';
import * as log4js from "log4js";
import {FilmService} from "../service/FilmService"
import {ActorService} from "../service/ActorService"
import { Film } from '../entity/Film';
import { Actor } from '../entity/Actor';

const logger = log4js.getLogger("CityAnalyse");

export class FilmSpider{
    private filmService: FilmService;
    private actorService: ActorService;
    constructor() {
        this.filmService = new FilmService('film');
        this.actorService = new ActorService('actor');
    }
    readFilms() {
        FileUtil.readFile(__dirname + '/film.json').then(data => {
            const filmJson = JSON.parse(data);
            filmJson.map(filmUrl => {
                new SpiderUtil().getPage(filmUrl).then(res => {
                    this.analyseFilm(filmUrl, res['res']['text'])
                })
            })
        })
    }
    analyseFilm(filmUrl:string, html: string){
        const $ = cheerio.load(html);
        let film = new Film();
        film.img = $('.movie-container .img').attr('src');
        film.name = $('.movie-container .movie-name').children('span')[1].children[0].data;
        film.ename = $('.movie-container .movie-ename')[0].children[0].data;
        console.log('电影图片: '+$('.movie-container .img').attr('src'));
        console.log('电影名称: '+$('.movie-container .movie-name').children('span')[1].children[0].data);
        console.log('电影外文名称: '+$('.movie-container .movie-ename')[0].children[0].data);
        if($('.movie-container .movie-score .released-score').length > 0){
            film.score = $('.movie-container .movie-score .released-score .rating span')[0].children[0].data
            film.status = '0'
            film.peopleNum = '0'
            film.wannerNum = '0'
            console.log('电影评分: '+$('.movie-container .movie-score .released-score .rating span')[0].children[0].data);
            console.log('电影评价人数: '+$('.movie-container .movie-score .released-score .score-num span')[1].children[0].data);
        }else if($('.movie-container .movie-score .noreleased-score').length > 0){
            film.status = '1'
            film.score = $('.movie-container .movie-score .noreleased-score .score')[0].children[0].data;
            film.peopleNum = $('.movie-container .movie-score .noreleased-score .score-num span')[1].children[0].data;
            film.wannerNum = $('.movie-container .movie-score .noreleased-score .wish-num span')[0].children[0].data;
            console.log('点映评分 :'+$('.movie-container .movie-score .noreleased-score .score')[0].children[0].data)
            console.log('电影评价人数: '+$('.movie-container .movie-score .noreleased-score .score-num span')[1].children[0].data);
            console.log('想看人数: '+$('.movie-container .movie-score .noreleased-score .wish-num span')[0].children[0].data);
        }else if($('.movie-container .movie-score .noreleased-noscore').length > 0){
            film.status = '2';
            film.score = '0'
            film.peopleNum = '0'
            film.wannerNum = $('.movie-container .movie-score .noreleased-noscore .wish-num span')[0].children[0].data;
            console.log('想看人数: '+$('.movie-container .movie-score .noreleased-noscore .wish-num span')[0].children[0].data);
        }else if($('.movie-container .movie-score .released-noscore').length > 0){
            film.score = '0'
            film.status = '0'
            film.peopleNum = '0'
            film.wannerNum = '0'
            console.log('暂无评分: '+$('.movie-container .movie-score .released-noscore')[0].children[0].data);
        }
        film.type = $('.movie-container .movie-category .movie-cat')[0].children[0].data
        film.country = $('.movie-container .movie-content-row')[0].children[0].children[0].data
        film.duration = $('.movie-container .movie-content-row')[0].children[2].children[0].children[0].data
        film.releaseTime = $('.movie-container .movie-content-row')[1].children[0].data
        film.desc = $('.section-expander div')[1].children[0].children[0].data
        film.tags = '';
        if($('.movie-container .movie-category .movie-tag')[0]){
            let tags = $('.movie-container .movie-category .movie-tag')[0].children[0].children;
            tags.map(chi => {
                film.tags += chi.children?(chi.children[0].data + ','):chi.data;
            })
        }
        if(film.tags.endsWith(',')){
            film.tags = film.tags.substr(0,film.tags.length-1);
        }
        film.url = filmUrl;
        this.filmService.add(film);
        console.log(film);
        console.log('电影类型: ' + $('.movie-container .movie-category .movie-cat')[0].children[0].data);
        console.log('电影tag: ' + film.tags);
        console.log('国家: ' + $('.movie-container .movie-content-row')[0].children[0].children[0].data);
        console.log('时长:' + $('.movie-container .movie-content-row')[0].children[2].children[0].children[0].data)
        console.log('大陆上映时间:' + $('.movie-container .movie-content-row')[1].children[0].data) 
        console.log('描述信息：'+$('.section-expander div')[1].children[0].children[0].data)  
        console.log('演员信息:')
        const actors = $('.section-movie-celebrities .movie-celebrities li .link')
        actors.map(i => {
            console.log('       真名：'+actors[i].children[1].children[0].data+'  角色名：'+actors[i].children[2].children[0].data+'  头像：'+actors[i].children[0].attribs.src)
        })
        console.log('--------------------------------------------\r\n')     
    }
    analyseActors(){
        this.filmService.query(new Film()).then(rep => {
            rep.map(film => {
                new SpiderUtil().getPage(film.url).then(res => {
                    const $ = cheerio.load(res['res']['text']);
                    const actors = $('.section-movie-celebrities .movie-celebrities li .link')
                    actors.map(i => {
                        console.log(film.url + '       真名：'+actors[i].children[1].children[0].data+'  角色名：'+actors[i].children[2].children[0].data+'  头像：'+actors[i].children[0].attribs.src)
                        let actor = new Actor();
                        actor.filmId = film.id;
                        actor.realName = actors[i].children[1].children[0].data;
                        actor.roleName = actors[i].children[2].children[0].data;
                        actor.avatar = actors[i].children[0].attribs.src;
                        this.actorService.add(actor);
                    })
                })
            })
        })
    }
}