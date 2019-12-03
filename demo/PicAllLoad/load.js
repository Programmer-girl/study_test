
let mulitImg = [
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1575010976&di=cab096a2168138289d3f04a4245cf22e&src=http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021060818&di=790a1cd8bb271e5d85559c9d47fbe4b5&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140326%2F9488959_141116575176_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021188589&di=c56acf0b454fe6da3047a3a849031bd8&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1735688044%2C4235283864%26fm%3D214%26gp%3D0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021060818&di=68224194b35419315a7c7533558f1c49&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F27%2F20161127103911_Fercm.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021060818&di=646301f541ee0e7ff4ec234628804f79&imgtype=0&src=http%3A%2F%2Fpic41.nipic.com%2F20140501%2F18539861_155959517170_2.jpg',
    'http://imgsrc.baidu.com/forum/w%3D580/sign=d0ab380d98dda144da096cba82b6d009/e8fc9925bc315c60e8d4f7f182b1cb1349547769.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021677300&di=dc12b18400d40da8338604c996b31075&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F25%2F20120825230802_2v8wi.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021677300&di=1721502ce7cc80de20c94f00011dfb6d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201209%2F10%2F20120910104549_eiEuA.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021677300&di=d557c85ceea152ff58cf0a8bab290f21&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fgm%2F2013%2F0322%2FU8777P115DT20130322101422.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021677300&di=27ce1a34aa1dc11cb9b32949d4cdf721&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F26%2F20141026155925_dH4kh.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021677300&di=0f3eb61ac3f7c56bcfb794f425ba55be&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F20120523%2F8469583_150924210106_2.jpg',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0000.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0001.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0002.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0003.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0004.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0005.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0006.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0007.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0008.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0009.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0010.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0011.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0012.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0013.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0014.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0015.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0016.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0017.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0018.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0019.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0020.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/end2/particle/particle_0021.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0000.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0001.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0002.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0003.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0004.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0005.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0006.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0007.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0008.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0009.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0010.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0011.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0012.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0013.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0014.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0015.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0016.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0017.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0018.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0019.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0020.png',
    'https://static.ws.126.net/163/f2e/news/2019_protection/img/s6/s6_text/s6text_0021.png',
];
let promiseAll = [];
let img = [];
let imgTotal = mulitImg.length;

for (let i = 0; i < imgTotal; i++) {
    promiseAll[i] = new Promise((resolve, reject) => {
        img[i] = new Image();
        img[i].src = mulitImg[i];
        img[i].onload = function () {
            console.log(`第${i}张加载完成`);
            resolve(img[i]);
        };
        img[i].onerror = function (err) {
            //图片出错，设置默认地址
            this.src = '默认图片地址';
        };
    });
}
Promise.all(promiseAll).then((img) => {
    console.log(...img, '全部加载完成');
});

