<template>
  <div id='index'>
    <m-header>
      <span slot="overwrite-left" class="city" @click="selCity">{{city}}</span>
      <span>猫眼电影</span>
    </m-header>
    <div class="index-tab">
      <tab @changeIndex='changeIndex'>
        <tab-item :selected='currentIndex===0' @itemClick='itemClick'>影片</tab-item>
        <tab-item :selected='currentIndex===1' @itemClick='itemClick'>影院</tab-item>
      </tab>
    </div>
    <section class="index-main">
      <transition name="city-area-transition" enter-active-class="animated fadeInLeft">
        <section class="film-area" v-if="currentIndex === 0">
          <film-card v-for='data in filmData' :film-data='data'></film-card>
        </section>
      </transition>
      <transition name="city-area-transition" enter-active-class="animated fadeInRight">
        <section class="cinema-area" v-if="currentIndex === 1">
          <cinema-card v-for='data in cinemas' :cinema-data='data'></cinema-card>
        </section>
      </transition>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MHeader from '#/header/mHeader'
import TabItem from '#/tab/tabItem'
import Tab from '#/tab/tab'
import FilmCard from './filmCard'
import CinemaCard from './cinemaCard'
export default {
  data () {
    return {
      city: '北京',
      filmData: [
        {
          'id': 1,
          'name': '唐人街探案2',
          'img': '//p1.meituan.net/movie/efb0a5e3989f45c4f3e22108bcc27ed71037307.jpg@177w_249h',
          'ename': 'Detective Chinatown 2',
          'score': '9.2',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,动作,悬疑',
          'country': '中国大陆',
          'duration': '120',
          'releaseTime': '2018-02-16大陆上映',
          'desc': '唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘密...',
          'url': 'http://m.maoyan.com/movie/344990?_v_=yes',
          'tags': '2D,IMAX'
        },
        {
          'id': 2,
          'name': '捉妖记2',
          'img': '//p0.meituan.net/movie/ddbaa3f31cdbdfa6cd72721de63545021032555.jpg@177w_249h',
          'ename': 'Monster Hunt 2',
          'score': '8.1',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,奇幻',
          'country': '中国大陆,中国香港',
          'duration': '110',
          'releaseTime': '2018-02-16大陆上映',
          'desc': '上一集与胡巴分别后，天荫（井柏然 饰)带着小岚（白百何 饰）踏上寻父之路，在义薄云天的天师堂堂主云大哥的帮助下，二人得知天荫父亲宋戴天的护妖轨迹；而重回永宁村的胡巴再度被妖王追杀，颠沛流离逃亡时结识大赌徒屠四谷（梁朝伟 饰）和一只妖怪，三人一起过着相依为命的生活，但又因屠四谷欠下的巨额赌债横生诸多波折。与此同时，江湖盛传小妖王胡巴的重金悬赏令，妖界大军、天师精英、绿林草莽闻风而动，多方势力为抢夺胡巴在清水镇掀起腥风血雨。千钧一发之际，念子心切的天荫和小岚通过天师堂找到胡巴并一起逃离险境。岂料，一场更大的惊天阴谋尾随而至，伺机而动……',
          'url': 'http://m.maoyan.com/movie/346272?_v_=yes',
          'tags': '2D,IMAX'
        },
        {
          'id': 3,
          'name': '红海行动',
          'img': '//p1.meituan.net/movie/b03a8a75e75a416dbf981e032fa0ca8a857257.jpg@177w_249h',
          'ename': 'Operation Red Sea',
          'score': '9.5',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,动作',
          'country': '中国大陆,中国香港',
          'duration': '138',
          'releaseTime': '2018-02-16 08:00大陆上映',
          'desc': '本片主要讲述了索马里海域外，中国商船遭遇劫持，船员全数沦为阶下囚。蛟龙突击队沉着应对，潜入商船进行突袭，成功解救全部人质。返航途中，非洲北部伊维亚共和国发生政变，恐怖组织连同叛军攻入首都，当地华侨面临危险，海军战舰接到上级命令改变航向，前往执行撤侨任务。蛟龙突击队八人，整装待发。时间紧迫，在“撤侨遇袭可反击，相反则必须避免交火，以免引起外交冲突”的大原则下，海军战舰及蛟龙突击队深入伊维亚，在恶劣的环境之下，借助海陆等多种装备，成功转移等候在码头的中国侨民，并在激烈的遭遇战之后，营救了被恐怖分子追击的中国领事馆巴士。然而事情尚未完结，就在掩护华侨撤离之际，蛟龙突击队收到中国人质被恐怖分子劫持的消息。众人深感责任重大，义无反顾地再度展开营救行动。前方路途险恶，蛟龙突击队即将遭遇的，远不止人质营救那么简单,恐怖分子的惊天阴谋即将浮出水面…..',
          'url': 'http://m.maoyan.com/movie/1182552?_v_=yes',
          'tags': '3D,IMAX'
        },
        {
          'id': 4,
          'name': '祖宗十九代',
          'img': '//p0.meituan.net/movie/9eb0146207d8c06c401034e784ee6c191914880.jpg@177w_249h',
          'ename': 'The Faces of My Gene',
          'score': '7.7',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,奇幻',
          'country': '中国大陆',
          'duration': '95',
          'releaseTime': '2018-02-16大陆上映',
          'desc': '立志成为作家的土肥圆贝小贝（岳云鹏 饰），因外貌原因在现实屡屡碰壁，后在不经意间找到尘封已久的家谱，意外穿越至各个年代，与祖先爆笑相遇，亲自调配自己的基因。',
          'url': 'http://m.maoyan.com/movie/1211538?_v_=yes',
          'tags': ''
        },
        {
          'id': 5,
          'name': '前任3：再见前任',
          'img': '//p1.meituan.net/movie/770b38cff221ad8545bf7bd3eba9912b1601613.jpg@177w_249h',
          'ename': 'The Ex-file: The Return Of The Exes',
          'score': '9.2',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,爱情',
          'country': '中国大陆',
          'duration': '120',
          'releaseTime': '2017-12-29大陆上映',
          'desc': '本片讲述了一对好基友孟云（韩庚 饰）和余飞（郑恺 饰）跟女友都因为一点小事宣告分手，并且“拒绝挽回，死不认错”。两人在夜店、派对与交友软件上放飞人生第二春，大肆庆祝“黄金单身期”，从而引发了一系列好笑的故事。孟云与女友同甘共苦却难逃“五年之痒”，余飞与女友则棋逢敌手相爱相杀无绝期。然而现实的“打脸”却来得猝不及防：一对推拉纠结零往来，一对纠缠互怼全交代。两对恋人都将面对最终的选择：是再次相见？还是再也不见？',
          'url': 'http://m.maoyan.com/movie/344929?_v_=yes',
          'tags': ''
        },
        {
          'id': 6,
          'name': '西游记女儿国',
          'img': '//p1.meituan.net/movie/bfd371ed5c7290ca47a41e45e36dfe43963033.jpg@177w_249h',
          'ename': 'The Monkey King 3',
          'score': '7.8',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,爱情,动作',
          'country': '中国大陆,中国香港',
          'duration': '116',
          'releaseTime': '2018-02-16大陆上映',
          'desc': '唐僧师徒途经忘川河，因激怒河神而误入西梁女界。闯入其中，众人才发现这个国家只有女性，并且建国以来此地就没来过男性。而且国中立有祖训，将男人视为天敌。典籍中更有预言，指明有朝一日，会有东土而来的僧人带着一只猴子、一头猪和一个小蓝人闯入其中。他们到来之日，便是女儿国走向毁灭之时。',
          'url': 'http://m.maoyan.com/movie/338463?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 7,
          'name': '熊出没·变形记',
          'img': '//p0.meituan.net/movie/cec506a630a212cb68dcb7d09bfcc723762226.jpg@177w_249h',
          'ename': 'BOONIE BEARS : THE BIG SHRINK',
          'score': '9.1',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,动画,冒险',
          'country': '中国大陆',
          'duration': '90',
          'releaseTime': '2018-02-16大陆上映',
          'desc': '光头强爸爸突然到访狗熊岭，向来严厉古板的强爸却对光头强嘘寒问暖，而朝夕相处却未能缓和关系，反而导致了父子矛盾的爆发……在一次激烈的争吵中，光头强和两熊被“缩小机”意外缩小，毫不知情的强爸伤心离开，并无意间带走了“缩小机”。于是，光头强和两熊踏上了追赶强爸和机器的“微观世界”冒险之旅。与此同时，一名陌生国外女记者突然出现，并频频出没于大马哈鱼生活的河域附近，举止神秘，牵出了一系列神秘事件……',
          'url': 'http://m.maoyan.com/movie/1211482?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 251,
          'name': '萧何月下追韩信',
          'img': '//p1.meituan.net/movie/bbf4d6279c2f5f5ea3eb15c8304e987d127911.jpg@177w_249h',
          'ename': 'In Pursuit of The General',
          'score': '7.0',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '戏曲',
          'country': '中国大陆',
          'duration': '90',
          'releaseTime': '2015-05-05大陆上映',
          'desc': '京剧电影《萧何月下追韩信》根据周 信芳演出本整理编排。秦末，刘邦为与项羽争夺天下，要张良尽量为己方物色人才。韩信在项羽帐下怀才不遇，得到张良的角书推荐后，投奔到刘邦营中。丞相萧何知道韩信有大将之才，对他颇为赏识，屡次向刘邦推荐。但刘邦认为韩出身低微，坚决不予重用。韩信一怒之下，不辞而别。萧何得知后，立刻披星戴月前往追赶。韩信为萧何的真诚所感动，两人一道返回汉营。刘邦最终拜韩信为大将。',
          'url': 'http://m.maoyan.com/movie/248292?_v_=yes',
          'tags': ''
        },
        {
          'id': 252,
          'name': '狗狗的疯狂假期',
          'img': '//p1.meituan.net/movie/108a5b7bc52db5309a9a656482ed3534353800.jpg@177w_249h',
          'ename': 'Ozzy 2016',
          'score': '8.4',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,动画',
          'country': '西班牙',
          'duration': '90',
          'releaseTime': '2018-02-02大陆上映',
          'desc': '本片主要讲述了奥兹（Ozzy)是一只友好和平的小猎犬，有一天，他的主人要出门开始一个漫长而遥远的旅途，唯一的问题是，不允许带狗！于是，他们为奥兹找了一家顶级的动物旅馆—蓝河会所。而这个地方其实是一个恶棍经营的专门设局捕捉宠物的地狱。奥兹刚入住就被设局捕捉，并关进私牢。奥兹开动它的聪明智慧，一面与恶棍周旋，避免危险，一面团结与它相同遭遇的新朋友，成功逃出地狱并返回家中。',
          'url': 'http://m.maoyan.com/movie/1177952?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 253,
          'name': '爱在记忆消逝前',
          'img': '//p0.meituan.net/movie/961642c88370bbabe018f5672dc24a581826950.jpg@177w_249h',
          'ename': 'The Leisure Seeker',
          'score': '9.0',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,喜剧,爱情',
          'country': '意大利,法国',
          'duration': '112',
          'releaseTime': '2018-02-23大陆上映',
          'desc': '约翰（唐纳德·萨瑟兰 饰）是一位文学教师和作家，海明威的死忠，尽管阿兹海默症已经让他的记忆越来越差，甚至会忘记妻子和儿女的名字，却依旧可以随口说出海明威的所有作品，《老人和海》更是他的钟爱。因为妻子艾拉（海伦·米伦 饰）患重病需要住院， 约翰就只能进入养老院，携手走过一辈子的二人面临永远分开的未来。于是，他们有了一个疯狂的决定，决心驾驶名叫“leisure seeker 求闲者”的房车，从马塞诸塞州一路南行，回顾70年代曾和孩子们一起度假的旅程，目的地是西锁岛key west 的海明威故居。',
          'url': 'http://m.maoyan.com/movie/667783?_v_=yes',
          'tags': ''
        },
        {
          'id': 254,
          'name': '人怕出名猪怕壮',
          'img': '//p0.meituan.net/movie/b830d45b42995ab6ddb44750fda13bbe2433047.jpg@177w_249h',
          'ename': 'Fat And Fame',
          'score': '0',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧',
          'country': '中国大陆',
          'duration': '97',
          'releaseTime': '2018-02-20大陆上映',
          'desc': '年关将至，小城居民都在筹备着过年。社区也不例外，请来了杀猪匠，白刀子进红刀子出，一头肥硕的猪，即将踏入走上餐桌的征途。然而，一句声嘶力竭的“幺儿”打破了这平静祥和的氛围，猪，不再是普通猪，人，变成了各色人，一出关于猪权归属的小城轶事，轰轰烈烈、热热闹闹的拉开了序幕。',
          'url': 'http://m.maoyan.com/movie/1212982?_v_=yes',
          'tags': ''
        },
        {
          'id': 255,
          'name': '小萝莉的猴神大叔',
          'img': '//p1.meituan.net/movie/f042762fa4a975501b69d4f6af6520341035964.jpg@177w_249h',
          'ename': 'Bajrangi Bhaijaan',
          'score': '0',
          'status': '2',
          'peopleNum': '12345',
          'wannerNum': '18540',
          'type': '剧情,喜剧',
          'country': '印度',
          'duration': '141',
          'releaseTime': '2018-03-02大陆上映',
          'desc': '印度教教徒帕万（萨尔曼·汗 饰）在一次机缘巧合下结识了与母亲走失并有语言障碍的穆斯林小女孩沙希达（哈尔莎莉·马尔霍特 饰）。在得知沙希达是巴基斯坦人后，帕万决定帮助她回家，可在回巴基斯坦途中却四处碰壁，遭遇领事馆冲突、被旅游局欺骗之后，帕万立志将不惜一切代价尽其所能带沙希达回到自己的家乡与家人团聚。',
          'url': 'http://m.maoyan.com/movie/343136?_v_=yes',
          'tags': ''
        },
        {
          'id': 256,
          'name': '忌日快乐',
          'img': '//p1.meituan.net/movie/5363c7cdaa05cf8148c1797b32654416823326.jpg@177w_249h',
          'ename': 'Happy Death Day',
          'score': '8.4',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,恐怖,惊悚',
          'country': '美国',
          'duration': '96',
          'releaseTime': '2018-02-02大陆上映',
          'desc': '生日当晚惨遭杀害的泰莉（杰西卡·罗德 饰），一觉醒来仍然活着。她以为只是生日前夕的恶梦，怎知醒来后的经历跟梦境完全一样，生日当晚再惨遭杀害，然后又一觉醒来……她竟然无限次被杀，再无限次重返生日早上！泰莉醒完又死，死完又醒，她唯一可以做的，就是找出杀自己的神秘凶手，否则会被困在生日和死忌的无限轮回，直到永远……',
          'url': 'http://m.maoyan.com/movie/1204714?_v_=yes',
          'tags': ''
        },
        {
          'id': 257,
          'name': '恋爱回旋',
          'img': '//p1.meituan.net/movie/42a53c81054cff2c9c224b59225c2e014156615.jpg@177w_249h',
          'ename': 'ミックス。',
          'score': '0',
          'status': '2',
          'peopleNum': '12345',
          'wannerNum': '9823',
          'type': '喜剧,爱情,运动',
          'country': '日本',
          'duration': '119',
          'releaseTime': '2018-03-09大陆上映',
          'desc': '原天才乒乓球少女、现在恋爱工作都失败的单身OL富田多满子（新垣结衣 饰）回到家乡继承母亲的乒乓俱乐部，偶遇失意前拳击手萩原久（瑛太 饰），为了各自的执念组成男女混双，这对临时组合一路受挫一路成长，目标直指日本乒乓锦标赛，究竟新垣结衣与瑛太能否联手创造奇迹？',
          'url': 'http://m.maoyan.com/movie/1201381?_v_=yes',
          'tags': ''
        },
        {
          'id': 258,
          'name': '马戏之王',
          'img': '//p0.meituan.net/movie/18121bb13bd8b36243a871d075bcc80c1015601.jpg@177w_249h',
          'ename': 'The Greatest Showman',
          'score': '9.0',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,传记,歌舞',
          'country': '美国',
          'duration': '106',
          'releaseTime': '2018-02-01大陆上映',
          'desc': '本片讲述了马戏团鼻祖巴纳姆（休·杰克曼 饰）依靠自己无穷想象力和锲而不舍的精神，从经营博物馆到一手开创世界上第一家马戏团的故事。巴纳姆的奇思妙想最开始并不被大众所认可，几乎没人花钱欣赏，他的家人好友帮他度过一次次绝境。在经历了一系列挫折、与合作伙伴的分歧之后，秉持梦想的他终于成为全美甚至全世界最为知名的“造梦大师”。',
          'url': 'http://m.maoyan.com/movie/246714?_v_=yes',
          'tags': '2D,IMAX'
        },
        {
          'id': 259,
          'name': '金钱世界',
          'img': '//p0.meituan.net/movie/f36f161968a579c1d3ba961d6c8367743999240.jpg@177w_249h',
          'ename': 'All the money in the world',
          'score': '0',
          'status': '2',
          'peopleNum': '12345',
          'wannerNum': '12943',
          'type': '剧情,犯罪,传记',
          'country': '美国,英国',
          'duration': '124',
          'releaseTime': '2018-03-02大陆上映',
          'desc': '盖蒂家族是美国著名的富豪家族，这位超级富豪的儿子与妻子盖尔·哈里斯离婚之后，盖尔独自抚养儿子盖蒂三世，保罗和孙子的关系也相对疏远。1973年，习惯了花天酒地的孙子被意大利黑帮绑架，对方向盖蒂家族索要1700万美元的赎金。老盖蒂起初以为是一场闹剧，但随着孙子惨遭身体伤害，事态变得危险起来。终于，一个神勇无比的CIA特工前往绑架地点展开了营救行动。',
          'url': 'http://m.maoyan.com/movie/1203436?_v_=yes',
          'tags': ''
        },
        {
          'id': 260,
          'name': '一个人的课堂',
          'img': '//p1.meituan.net/movie/5a9cfe47564e997f112c89daef67810c3461120.jpg@177w_249h',
          'ename': 'A Class of One',
          'score': '9.3',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,家庭',
          'country': '中国大陆',
          'duration': '105',
          'releaseTime': '2018-01-16大陆上映',
          'desc': '本片讲述了代课老师宋文化（孙海英 饰），他所在偏远学校，师生曾一度达几百人，但随着农村外出务工的增多，村里孩子陆续跟着父母转学到城市上学，学校变得落寞，教师队伍也逐渐仅剩宋文化一人仍坚守教师岗位。新学期将至，宋文化挨家挨户的召集学生上课，结果只来了四个学生，四个学生，还是三个不同的年级，宋文化只能在一个教室给学生们轮流上课。后来学生陆续转学，学校学生仅剩唐明明这一个学生，宋文化依然坚持每天到学校去上课，每天按时打上课铃，按时升国旗，维护着学校的尊严。在教委下达教师统一转正的考试，宋文化考试没有通过，被教育部门辞退。教育部门派了一个刚从师范毕业的大学生过来接替宋文化，然后这个大学生教了两个星期就辞职不干了。面对学生唐明明（王乃训 饰）没有老师来教的囧境，唐明明奶奶、村干部、教育局的领导都轮番上门来做宋文化的工作，希望他能重返岗位，宋文化心里很冒火，他本计划要去广东打工了，面对唐明明可能被失学，宋文化经过思想斗争，还是从去广东路上的火车站又折返回来，重新给唐明明当老师教学。宋文化和唐明明又在一起上课了，唐明明奶奶为了感谢宋老师，每天都来给宋老师和唐明明一起送饭，在一个雨天，唐明明奶奶掉进了河里摔伤瘫痪在床，唐明明因照顾奶奶不能来上学，宋老师毅然背着黑板去唐明明家上课，唐明明奶奶没多久去世了。宋文化坚持把唐明明教到了小学毕业，后把唐明明托付给了中学校长，也结束了他30年的教书生涯。宋文化也进城打工了，每个月坚持给唐明明寄来500元生活费，唐明明给宋老师的书信往来中感激之情难以言表。',
          'url': 'http://m.maoyan.com/movie/341323?_v_=yes',
          'tags': ''
        },
        {
          'id': 261,
          'name': '盲·道',
          'img': '//p1.meituan.net/movie/f102d7c87796054feba594fc5fdf797e1694630.jpg@177w_249h',
          'ename': 'Blind Way',
          'score': '7.3',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,悬疑,犯罪',
          'country': '中国大陆',
          'duration': '110',
          'releaseTime': '2018-02-02大陆上映',
          'desc': '据民政部估计，全国流浪乞讨儿童数量在100万-150万左右。在一些地乡村地区，买卖儿童几近市场化，形成了一个完整的地下黑色利益链。盲人小女孩晶晶（杜函梦 饰）一直被以郭伟（胡明 饰）为头目的犯罪团伙控制下在街头乞讨赚钱。一天，她在地铁通道里遇到了赵亮（李杨 饰）。赵亮是一名落魄摇滚大叔，整天装扮成盲人进行坑蒙拐骗。为了逃脱郭伟残暴的毒打，她在赵亮的带领下到了派出所，但民警王莉莉（于越 饰）根本找不到晶晶的家，晶晶却说赵亮是她的爸爸，万般无奈之下，赵亮只好暂时收留她。 最终犯罪团伙还是找到了他们，并以晶晶“监护人”的身份把她带走，晶晶和犯罪团伙之间到底是什么关系？赵亮为了弄清楚这一切，踏上了一场未知的行程。而他和晶晶的故事才刚刚开始……',
          'url': 'http://m.maoyan.com/movie/341999?_v_=yes',
          'tags': ''
        },
        {
          'id': 262,
          'name': '尼斯：疯狂的心',
          'img': '//p0.meituan.net/movie/0e3366e8b20293c20c0d2f82b024ed4c1006913.jpg@177w_249h',
          'ename': 'Nise - O Coração da Loucura',
          'score': '8.6',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,历史,传记',
          'country': '巴西',
          'duration': '109',
          'releaseTime': '2018-01-05大陆上映',
          'desc': '尼斯·达·西尔维拉（Nise da Silveira）医生回到里约热内卢郊区的精神病医院工作。她拒绝采用新型高强度电击疗法来治疗精神分裂症患者。其他医生对其冷嘲热讽，她不得不使用医院已被废弃的作业治疗区开展工作。尼斯用图画、小狗和爱来帮助病人，开启了一场“革命”。',
          'url': 'http://m.maoyan.com/movie/343447?_v_=yes',
          'tags': ''
        },
        {
          'id': 263,
          'name': '比得兔',
          'img': '//p1.meituan.net/movie/b0df0a3f7e07571c1193819c5a4f88ee827964.jpg@177w_249h',
          'ename': 'Peter Rabbit',
          'score': '0',
          'status': '2',
          'peopleNum': '12345',
          'wannerNum': '60568',
          'type': '喜剧,动画,冒险',
          'country': '美国',
          'duration': '95',
          'releaseTime': '2018-03-02大陆上映',
          'desc': '电影《比得兔》是一部由英国百年经典IP改编的真人动画电影，影片讲述了田园冒险大王“比得兔” 带领一众伙伴，与麦格雷戈叔侄二人，为争夺菜园主权和隔壁美丽女主人贝伊的喜爱而斗智斗勇、各显神通的爆笑故事。随着人兔大战不断升级，一系列欢乐闹趣、令人捧腹、啼笑皆非的趣事也由此引发。',
          'url': 'http://m.maoyan.com/movie/343762?_v_=yes',
          'tags': ''
        },
        {
          'id': 264,
          'name': '绝命时钟2:22',
          'img': '//p0.meituan.net/movie/abbe5f2d9c038bbfb84d27be3ad9ba22603463.jpg@177w_249h',
          'ename': '2:22',
          'score': '7.9',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '爱情,悬疑',
          'country': '美国,澳大利亚',
          'duration': '98',
          'releaseTime': '2018-01-26大陆上映',
          'desc': '本片讲述了有严格作息规律的男主角迪伦(米契尔·哈思曼 饰)有一种天生的洞察规律的能力，某日下午2时22分，身为航空管制员迪伦·布兰森被神秘光亮所麻痹，而这差点让他指挥的飞机失事。从此他每天都会感受到这光亮，渐渐发现自己身处某种循环之中。一次非常偶然的机会，迪伦遇见了让他一见钟情的莎拉（泰莉莎·帕尔墨 饰），二人聊天惊讶发现，莎拉就是迪伦差点酿成飞行事故的航班乘客，非常巧合的是他们同年同月同日出生。随着二人的了解深入，迪伦与莎拉的巧合也越来越多，频繁出现的幻觉与不断循环的事件将二人的命运与三十年前发生在纽约中央车站一起情杀案联系在一起，迪伦一直探究“2:22”背后的秘密，发现三十年前的凶杀案即将重演。',
          'url': 'http://m.maoyan.com/movie/558308?_v_=yes',
          'tags': ''
        },
        {
          'id': 265,
          'name': '奇迹男孩',
          'img': '//p1.meituan.net/movie/862563dfea65ac947a149ce466f7f1771014432.jpg@177w_249h',
          'ename': 'Wonder',
          'score': '9.3',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,家庭',
          'country': '美国,中国香港',
          'duration': '114',
          'releaseTime': '2018-01-19大陆上映',
          'desc': '10 岁的奥吉（雅各布·特瑞布雷 饰）天生脸部畸形，此前一直在家中和妈妈自学。当他小学五年级时，奥吉进入父母为他精心挑选的学校上学。在这里，奥吉将与校长、老师以及性格迥异的同学相处，他不寻常的外表让他成为同学们讨论的焦点，并终日受到嘲笑和排斥，就连好不容易交到的新朋友也似乎不太值得信任。幸运的是，在成长过程中，奥吉的父母、姐姐一直是他最坚强的后盾，在他们的支持与关爱下，奥吉凭借自身的勇气、善良、聪敏影响激励了许多身边的人，并收获了友谊、尊重与爱，最终成长为大家心目中的不可思议的“奇迹”。',
          'url': 'http://m.maoyan.com/movie/672130?_v_=yes',
          'tags': ''
        },
        {
          'id': 267,
          'name': '小马宝莉大电影',
          'img': '//p1.meituan.net/movie/0187900152d8667605609926065f14e2325061.jpg@177w_249h',
          'ename': 'My Little Pony: The Movie',
          'score': '8.8',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,动画,冒险',
          'country': '美国,加拿大',
          'duration': '100',
          'releaseTime': '2018-02-02大陆上映',
          'desc': '一股新黑暗势力威胁到小马谷，六位小伙伴紫悦、苹果嘉儿、云宝、碧琪、柔柔和珍奇离开小马国踏上难忘之旅，在旅途中他们结交新朋友，遇到刺激的挑战，必须通过友谊的魔力拯救自己的家园。',
          'url': 'http://m.maoyan.com/movie/1208748?_v_=yes',
          'tags': ''
        },
        {
          'id': 268,
          'name': '南极之恋',
          'img': '//p0.meituan.net/movie/84badad102e99ab4043226a0f7a5dda319112992.jpg@177w_249h',
          'ename': 'Till The End Of The World',
          'score': '9.0',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '爱情,冒险',
          'country': '中国大陆',
          'duration': '114',
          'releaseTime': '2018-02-01 18:00大陆上映',
          'desc': '公元2015年11日，鲜红色的“双水獭”运输机与极寒风暴遭遇，坠毁于只有孤独与绝望的南极腹地，幸存者只剩城市物质男富春（赵又廷 饰）和高空物理女科学家如意（杨子姗 饰）。要活下来，我们必须活下来！在等待救援和自救之间，他们选择了后者，于是在苍苍白色的南极冰原上，两个红色的小点缓慢蠕动着，那是小腿骨折的如意和拖拽着她的富春……极致的绝望和废弃的观测小屋几乎是同时出现，虽然补给和燃料依旧匮乏，虽然依旧无法分辨方向，但富春和如意，这对把生命交托给对方的男女已经有了“家”。75个无夜的白昼，以“家”为圆心，富春的求救之路充斥着极地冰裂、爆裂风暴、冰崩雪塌、强光雪盲，死神如影随形；75个无夜的白昼，在“圆心”的家，如意等待着、牵挂着、祈盼着，思念着，只为兑现“你走了，我等你”的誓言……南极大陆的壮丽绝美下，虽然死亡是日常的主题，但爱情却倔强的心面白阳，茁壮的逆光生长，直至一场只有新郎新娘的极地婚礼。最后的出发，如意要富春活下来，富春答应；富春要如意活下来，如意却迟疑了……最后的最后，带着救援队回来的富春，面前的小屋已经被暴雪掩埋的宛如坟墓，如意还活着吗？爱情还活着吗？只有富春能够回答……',
          'url': 'http://m.maoyan.com/movie/338493?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 269,
          'name': '太空救援',
          'img': '//p1.meituan.net/movie/39b595c3eaad1ccf078caa6c89d05db42732032.jpg@177w_249h',
          'ename': 'Салют-7',
          'score': '8.2',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '动作,冒险,科幻',
          'country': '俄罗斯',
          'duration': '104',
          'releaseTime': '2018-01-12大陆上映',
          'desc': '根据真实事件改编。1985年，苏联在发射“礼炮”7号空间站后，由于操作不当及外部影响造成“礼炮”7号的部分损坏被搁置于太空轨道上。苏联方面为了该空间站不被他国所侵略，在做好击落准备的前提下，临危授命于空间站技术工程师维克托（巴维尔·捷列连科 饰）和前航天员佛拉基米尔（弗拉季米尔·弗多维琴科夫 饰）前往进行修复工作，期间两人背负国家荣誉、在意外频发的外太空做出了一系列攸关生死的抉择……',
          'url': 'http://m.maoyan.com/movie/1211063?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 270,
          'name': '金龟子',
          'img': '//p0.meituan.net/movie/50a802c7a930546e2e9b970c6f761a09227754.jpg@177w_249h',
          'ename': 'The Ladybug',
          'score': '8.6',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '动画,冒险,家庭',
          'country': '中国大陆',
          'duration': '77',
          'releaseTime': '2018-02-02大陆上映',
          'desc': '金龟子（刘纯燕 配音）生活在一所珍稀昆虫研究中心的人造“小丛林”虫箱里，过着简单快乐的生活。直到有一天，一只外来的蜻蜓水哥（张磊 配音）打破了这份平静……水哥向金龟子描述了虫箱外的世界，金龟子心向往之，它决定挣脱虫箱的束缚。但是虫箱外的世界真的像金龟子和朋友们想象得那般美好吗？在那个崭新的充满未知的世界里，金龟子和它的朋友们会历经怎样的一番奇遇呢？一段惊险又有趣的冒险旅程就此开始了！',
          'url': 'http://m.maoyan.com/movie/1212533?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 272,
          'name': '三块广告牌',
          'img': '//p1.meituan.net/movie/20e79043b6c5c11992e033bd182fae8b1032014.jpg@177w_249h',
          'ename': 'Three Billboards Outside Ebbing, Missouri',
          'score': '0',
          'status': '2',
          'peopleNum': '12345',
          'wannerNum': '25325',
          'type': '剧情,犯罪',
          'country': '美国,英国',
          'duration': '115',
          'releaseTime': '2018-03-02大陆上映',
          'desc': '米尔德雷德（弗兰西斯·麦克多蒙德 饰）的女儿在外出时惨遭奸杀，米尔德雷德和丈夫查理（约翰·哈克斯 饰）之间的婚姻因此走到了尽头，如今，她同儿子雷德（卡莱伯·兰德里·琼斯 饰）过着相依为命的生活。一晃眼几个月过去了，案件仍然没有告破预兆，而警方似乎早已经将注意力从案子上转移了开来。 被绝望和痛苦缠绕的米尔德雷德租下了高速公路边上的三块巨型广告牌，在上面控诉警方办案无能，并将矛头直接对准了警察局局长威洛比（伍迪·哈里森饰）。实际上，威洛比一直隐瞒着自己身患绝症命不久矣的事实。因为这三块广告牌，米尔德雷德和威洛比的生活发生了翻天覆地的变化。',
          'url': 'http://m.maoyan.com/movie/342754?_v_=yes',
          'tags': ''
        },
        {
          'id': 273,
          'name': '黑豹',
          'img': '//p1.meituan.net/movie/65ee71e7b58be81f612f2d28907d5ef01223359.jpg@177w_249h',
          'ename': 'Black Panther',
          'score': '0',
          'status': '2',
          'peopleNum': '12345',
          'wannerNum': '182170',
          'type': '剧情,动作,科幻',
          'country': '美国',
          'duration': '135',
          'releaseTime': '2018-03-09大陆上映',
          'desc': '“黑豹”是非洲国家瓦坎达的黑豹族对于领袖的传统称呼。特查拉（查德维克·博斯曼 饰）是目前的“黑豹”，其父为第一代“黑豹”。之前曾有陨石落在瓦坎达，并带来大量稀有的吸音金属。这种极具军事意义的矿产资源引来各方人士争夺，第一代黑豹正是死于抵御外敌的过程中。特查拉临危受命，成为新一代黑豹。他曾与暴风女神相爱，也曾短暂地加入复仇者联盟帮忙。面对背叛与危险，这位年轻的国王必须联合同盟，释放“黑豹”全部力量，奋力捍卫他的人民和国土。',
          'url': 'http://m.maoyan.com/movie/341138?_v_=yes',
          'tags': '3D,IMAX'
        },
        {
          'id': 275,
          'name': '芳华',
          'img': '//p1.meituan.net/movie/fe0d4da87d70ba2b91e10ac98e0bf5ef1365131.png@177w_249h',
          'ename': 'Youth',
          'score': '9.1',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,爱情,战争',
          'country': '中国大陆',
          'duration': '136',
          'releaseTime': '2017-12-15大陆上映',
          'desc': '上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。',
          'url': 'http://m.maoyan.com/movie/1170264?_v_=yes',
          'tags': '2D,IMAX'
        },
        {
          'id': 276,
          'name': '妈妈咪鸭',
          'img': '//p1.meituan.net/movie/ac672dbf7dd3045a1bb3a4b54bfa64672172928.jpg@177w_249h',
          'ename': 'Duck Duck Goose',
          'score': '9.2',
          'status': '1',
          'peopleNum': '4527',
          'wannerNum': '28476',
          'type': '动画,冒险,家庭',
          'country': '中国大陆,美国',
          'duration': '90',
          'releaseTime': '2018-03-09大陆上映',
          'desc': '本片讲述了雁群往南方迁徙的途中，“最棒飞行家”大鹏（赵路 配音）桀骜不驯爱捣乱，和他的女友晶晶（李蝉妃 配音）调情时不慎撞散了一群赶路的小鸭子。不服管教的大鹏决定单飞，不得已和两只落单的小鸭子淘淘（武皓栋 配音）、憇憇（殷筱瑜 配音）组成了“临时父子档”，踏上了一路乌龙的寻亲和南迁之旅。他们经历了一连串惊险、刺激又有趣的冒险。划过壮美的梯田，爬过冷峻的山脉，遇上好心收留他们的母鸡和妻管严公鸡、搭乘春运卡车的猪群、半瓶子中医技能的松鼠。路途中要时刻抵御想吃掉他们的恶猫，还险些成为“盘中烤鸭”。大鹏与淘淘姐弟两的命运紧紧关联，孤傲的大鹏也逐渐学会了责任与耐心。最后，焕然一新的大鹏得到了女友晶晶的原谅，和两只小鸭子组成了爱意满满的小家庭。',
          'url': 'http://m.maoyan.com/movie/1204720?_v_=yes',
          'tags': ''
        },
        {
          'id': 277,
          'name': '公牛历险记',
          'img': '//p1.meituan.net/movie/80910ba7d9c2c4ee383cfe1e9a997828637397.jpg@177w_249h',
          'ename': 'Ferdinand',
          'score': '9.2',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '喜剧,动画,冒险',
          'country': '美国',
          'duration': '108',
          'releaseTime': '2018-01-19大陆上映',
          'desc': '根据曼罗·里夫1936年经典童书改编，讲述西班牙一头名为“费迪南德”（约翰·塞纳 配音）的公牛的爆笑历险故事。费迪南德体型健壮，但却心地善良性格温和，它被误认为是危险的野兽，从而被捕送往他乡被逼做一只“斗牛”。为回到家人身边，他不得不踏上了一场终极冒险旅程。',
          'url': 'http://m.maoyan.com/movie/828745?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 278,
          'name': '无问西东',
          'img': '//p1.meituan.net/movie/75352182978ae891abb55727f51c28b6305181.jpg@177w_249h',
          'ename': 'Forever Young',
          'score': '8.6',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '爱情,战争',
          'country': '中国大陆',
          'duration': '138',
          'releaseTime': '2018-01-12大陆上映',
          'desc': '如果提前了解了你所要面对的人生，你是否还会有勇气前来？吴岭澜（陈楚生 饰）、沈光耀（王力宏 饰）、王敏佳（章子怡 饰）、陈鹏（黄晓明 饰）、张果果（张震 饰），几个年轻人满怀诸多渴望，在四个非同凡响的时空中一路前行。',
          'url': 'http://m.maoyan.com/movie/71946?_v_=yes',
          'tags': ''
        },
        {
          'id': 279,
          'name': '浪矢解忧杂货店',
          'img': '//p0.meituan.net/movie/ff952cfb2f56e71b86467bc18bce676b1258483.jpg@177w_249h',
          'ename': 'ナミヤ雑貨店の奇蹟',
          'score': '8.6',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情',
          'country': '日本',
          'duration': '130',
          'releaseTime': '2018-02-02大陆上映',
          'desc': '本片主要讲述了日本静僻的街道旁，一家杂货店，只要在晚上把写了烦恼的信丢进铁卷门上的投递口，隔天就可以在店后面的牛奶箱里拿到回信解答。 当他们纷纷写信到杂货店，不可思议的事也接二连三发生，而那些一瞬间的交会，又将如何演变成一生一世的救赎？',
          'url': 'http://m.maoyan.com/movie/1203768?_v_=yes',
          'tags': ''
        },
        {
          'id': 281,
          'name': '移动迷宫3：死亡解药',
          'img': '//p1.meituan.net/movie/16b410d5c58fce6b76c14775d946c3cc310492.jpg@177w_249h',
          'ename': 'Maze Runner: The Death Cure',
          'score': '7.8',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '动作,惊悚,科幻',
          'country': '美国',
          'duration': '142',
          'releaseTime': '2018-01-26大陆上映',
          'desc': '被困在迷宫里三年，成功逃脱的他们，这一次他们要再次回到迷宫。托马斯（迪伦·奥布莱恩 饰）带领小队成员开展最危险的行动，营救同伴、同时探索从进入迷宫开始就困扰大家的终极问题。',
          'url': 'http://m.maoyan.com/movie/248639?_v_=yes',
          'tags': '3D,IMAX'
        },
        {
          'id': 282,
          'name': '闺蜜2',
          'img': '//p1.meituan.net/movie/bb5cb9db65983c0e69bcc9ddec0f24e2187801.jpg@177w_249h',
          'ename': 'Girls 2',
          'score': '0',
          'status': '2',
          'peopleNum': '12345',
          'wannerNum': '237355',
          'type': '剧情,喜剧,冒险',
          'country': '中国香港,中国大陆',
          'duration': '109',
          'releaseTime': '2018-03-02大陆上映',
          'desc': '乔立向希汶（陈意涵 饰）求婚了！kimmy（薛凯琪 饰）兴奋地准备带希汶去越南开启疯狂单身之旅，谁知希汶却安排kimmy的“死对头”嘉岚（张钧甯 饰）以及乔立的表妹晶晶同行。当晚，在越南拍戏的小美为大家准备了盛大的别墅party，kimmy和嘉岚却因为赌气斗酒，令场面失控。一夜酩酊大醉后，众人醒来发现晶晶失踪，冤家路窄的嘉岚、kimmy以及一箱金子被莫名铐在一起。随即，闺蜜团接到神秘电话，要求她们在一天之内花光所有金条。三人惊慌失措之时，又有飞车黑帮赶来追杀。为了逃命、为了救出晶晶、为了解决谜团，闺蜜们踏上了一段啼笑皆非的脱险之旅。',
          'url': 'http://m.maoyan.com/movie/247083?_v_=yes',
          'tags': ''
        },
        {
          'id': 283,
          'name': '至爱梵高·星空之谜',
          'img': '//p0.meituan.net/movie/baa62fa68a0d243ee14074f155092bca131722.jpg@177w_249h',
          'ename': 'Loving Vincent',
          'score': '9.0',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '剧情,动画,传记',
          'country': '英国,波兰',
          'duration': '95',
          'releaseTime': '2017-12-08大陆上映',
          'desc': '影片用一封无法投递的信件串联起梵高在去世前最后六周里与他生命中最重要的三个人物之间的秘密，带观众穿越回十九世纪末的欧洲，并陪伴梵高走完他最后的人生。影片采用梵高原画作品中的人物原型还原梵高的艺术人生，让观众在享受美得令人窒息的视觉盛宴时，抽丝剥茧地发现隐藏了一个半世纪的秘密。',
          'url': 'http://m.maoyan.com/movie/337443?_v_=yes',
          'tags': ''
        },
        {
          'id': 284,
          'name': '24小时：末路重生',
          'img': '//p1.meituan.net/movie/30fbc4360b4bdae8c762a98aca5d5e3c1027737.jpg@177w_249h',
          'ename': '24 Hours To Live',
          'score': '7.9',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '犯罪,动作',
          'country': '美国,中国大陆',
          'duration': '92',
          'releaseTime': '2018-01-26大陆上映',
          'desc': '职业杀手特拉维斯（伊桑·霍克 饰）为不法公司红山集团卖命，而曾在红山集团效力的另一名杀手良心发现投靠了政府，准备向联邦局指控红山集团的罪证。红山集团派特拉维斯杀死证人毁灭证据，但是执行任务时事败身亡，临死前他掌握了联邦局藏匿证人的住所，雇主采用高科技复活了他24小时，并让他说出证人地址，之后就会将他处死。苏醒之后他了解了真相并得知他的妻子与儿子也是被红山集团杀害的时候，他幡然醒悟，决定用仅剩的24小时的生命赎罪，帮助国际刑警琳（许晴 饰）救出儿子、保护证据，并捣毁红山组织。',
          'url': 'http://m.maoyan.com/movie/475721?_v_=yes',
          'tags': ''
        },
        {
          'id': 285,
          'name': '莫斯科陷落',
          'img': '//p0.meituan.net/movie/fbbb2f3eee9e09c815667e3321705b33642678.jpg@177w_249h',
          'ename': 'Притяжение',
          'score': '7.4',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '爱情,科幻,灾难',
          'country': '俄罗斯',
          'duration': '119',
          'releaseTime': '2018-02-02大陆上映',
          'desc': '本片讲述了难得一见的流星雨即将在俄罗斯上空出现，青年男女们兴奋非常，纷纷走上街头见证着历史性的一刻。美丽女孩尤利娅（伊琳娜·斯达森保姆 Irina Starshenbaum 饰）不顾身为军官的父亲的反对，执意和特姆（亚历山大·佩特罗夫 Alexander Petrov 饰）交往。在流星雨来的这天，他们躲在一隅偷欢，却不知莫大的危机正在袭来。一艘外星飞船遭到意外，结果又被俄罗斯空军击中。它在迫降的过程中给莫斯科造成毁灭性的打击，而尤利娅的闺蜜也在灾难中丧生。在此之后，尤利娅和朋友们闯入禁区，遭遇了外星人。阴差阳错，她决定救治受重伤的外星飞行员汉克（林奈·穆罕默托夫 Rinal Mukhametov 饰），而特姆等憎恶外星人带来的灾难，对汉克恨之入骨。 跨越时空的爱情在此过程中产生……',
          'url': 'http://m.maoyan.com/movie/858598?_v_=yes',
          'tags': '3D'
        },
        {
          'id': 289,
          'name': '疯狂丑小鸭',
          'img': '//p1.meituan.net/movie/4e7b69b98f5477cce18992e7bb6128dd683897.jpg@177w_249h',
          'ename': 'The Ugly Duckling',
          'score': '8.1',
          'status': '0',
          'peopleNum': '12345',
          'wannerNum': '0',
          'type': '动画,冒险',
          'country': '中国大陆',
          'duration': '81',
          'releaseTime': '2016-10-03大陆上映',
          'desc': '在遥远的地方有一个美丽的鸟类王国，但不久这里的宁静就被反对派的叛变打破，丑小鸭的父母为了保护琉璃鸟而神秘失踪。为了解开琉璃鸟的秘密，找到自己的父母，丑小鸭和好朋友丑小八踏上了寻找老猫法师的征程，却不知道危险悄然而至。在反对派的鼓动下鸟类对人类发动了战争，为了阻止战争的进一步扩大，背负着天大秘密的丑小鸭毅然决然的登上了琉璃塔，前方等待他的将会是什么……',
          'url': 'http://m.maoyan.com/movie/1136547?_v_=yes',
          'tags': '3D'
        }
      ],
      cinemas: [
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '900m', tags: ['座', 'IMAX厅']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '1.2km', tags: ['座', '杜比全景声厅']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '1.5km', tags: ['座', 'IMAX厅']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '1.9km', tags: ['座']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '2.3km', tags: ['座', '杜比全景声厅']}
      ]
    }
  },
  computed: {
    ...mapGetters([
      'currentIndex'
    ])
  },
  components: {
    MHeader,
    Tab,
    TabItem,
    FilmCard,
    CinemaCard
  },
  methods: {
    changeIndex (oldVal, newVal) {
      // console.log('oldVal = ' + oldVal + '        newVal = ' + newVal)
    },
    itemClick (val) {
      this.$store.dispatch('SET_INDEX', val)
    },
    selCity () {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/functions.scss';
  .city{
    position: relative;
    display: inline-block;
    &:after{
      content: '';
      position: absolute;
      top: px2rem(45);
      right: px2rem(-25);
      display: inline-block;
      width: 0;
      height: 0;
      border-width: px2rem(9);
      border-color: #fff transparent transparent;
      border-style: solid;
    }
  }
  .index-tab{
    position: fixed;
    z-index: 999;
    top: px2rem(101);
    width: 100%;
    background: #fff;
  }
  .index-main{
    position: relative;
    top: px2rem(202);
    .film-area{
      padding: 0 px2rem(24);
    }
    .cinema-area{
      width: 100%;
      padding-left: px2rem(31);
    }
  }
</style>
