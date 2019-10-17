/**
 * @file options
 * @author yangxiao14
 */
// import jweixin from 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js'
/* eslint-disable */
import axios from 'axios';
export default (options) => {
    axios
    .get('/mo/q/newgetweixintoken?url=' + encodeURIComponent(location.href))
    .then(function (res) {
        if (res.data.no !== 0) {
            return;
        }
        let data = res.data.data;
        window.wx.config({
            debug: false,
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone',
                'onMenuShareWeibo'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        window.wx.ready(function () {
            let title = options.title;
            let link = options.url;
            let desc = options.desc || '手机贴吧';
            let imgUrl = options.imgUrl || 'http:' + __uri('../../img/common/logo.png');
            let successCallback = function() {};

            window.wx.onMenuShareTimeline({
                title: title,
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl,
                success: successCallback
            });
            window.wx.onMenuShareAppMessage({
                title: title,
                desc: desc, // 分享描述
                link: link,
                imgUrl: imgUrl,
                type: '', // 分享类型,music、video或link，不填默认为link
                success: successCallback
            });
            window.wx.onMenuShareQQ({
                title: title,
                desc: desc, // 分享描述
                link: link,
                imgUrl: imgUrl,
                success: successCallback
            });
            window.wx.onMenuShareQZone({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                success: successCallback
            });
            window.wx.onMenuShareWeibo({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                success: successCallback
            });
        });
        window.wx.error(function (err) {
            console.log('error',err);
        });
    });
};