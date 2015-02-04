// 默认设置
(function () {
  var defalutRules = [
    {
      "url": "http*://www.google.com/url*",
      "replacer": "/* Google 结果页面直接跳转 */\nfunction (url){\n  var matchResult = url.match(/&url=([^&]+).*/)\n  return matchResult && decodeURIComponent(matchResult[1])\n}",
      "urlType": "url-match",
      "type": "function"
    },
    {
      "url": "^https?:\\/\\/(((ajax|fonts)\\.googleapis\\.com)|(themes\\.googleusercontent\\.com)|(fonts\\.gstatic\\.com))\\/",
      "replacer": "/* Google 资源国内 CDN */\nfunction (url){\n  return url.replace('googleapis.com', 'lug.ustc.edu.cn')\n            .replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn')\n            .replace('fonts.gstatic.com', 'fonts-gstatic.lug.ustc.edu.cn')\n}",
      "urlType": "regex",
      "type": "function"
    },
    {
      "url": "http://ajax.lug.ustc.edu.cn/ajax/libs/jquery/1.11.2/jquery.min.js",
      "replacer": "http://ajax.lug.ustc.edu.cn/ajax/libs/jquery/1.11.2/jquery.js",
      "urlType": "url",
      "type": "url"
    },
    {
      "url": "http://fc.5sing.com/*",
      "replacer": "function (url){\n  var matchResult = url.match(/^http:\\/\\/fc\\.5sing\\.com\\/(\\d+)\\.html.*$/)\n  return 'http://5sing.kugou.com/fc/' + matchResult[1] + '.html'\n}",
      "urlType": "url-match",
      "type": "function"
    },
    {
      "url": "http://www.google-analytics.com/analytics-2.js",
      "replacer": "function (){\n  // return undefined 的例子，表示不进行重定向\n  // 当然，这个链接可能访问不了\n}",
      "urlType": "url",
      "type": "function"
    },
    {
      "url": "http://www.google-analytics.com/analytics-1.js",
      "replacer": "function (){\n  return false\n  // 这是返回值为 false 的例子，表示阻止跳转\n}",
      "urlType": "url",
      "type": "function"
    },
    {
      "url": "http://www.google-analytics.com/analytics.js",
      "replacer": "",
      "urlType": "url",
      "type": "url"
    },
    {
      "url": "http://*.stream.qqmusic.qq.com/*.m4a*",
      "replacer": "function (url){\n  download(url)\n}",
      "urlType": "url-match",
      "type": "function"
    },
    {
      "url": "http*://hm.baidu.com/h.js*",
      "replacer": "",
      "urlType": "url-match",
      "type": "url"
    },
    {
      "url": "http://w.cnzz.com/*",
      "replacer": "",
      "urlType": "url-match",
      "type": "url"
    },
    {
      "url": "http://pagead2.googlesyndication.com/pagead/show_ads.js",
      "replacer": "",
      "urlType": "url",
      "type": "url"
    }
  ]

  this.DEFALUT_RULES = defalutRules
}).call(this)
