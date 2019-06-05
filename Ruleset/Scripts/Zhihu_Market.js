// [MITM]
// hostname = api.zhihu.com
// http-response https?://api.zhihu.com/market/header script-path=https://github.com/linzx91/surge-ruleset/raw/master/Ruleset/Scripts/Zhihu_Market.js

var obj = JSON.parse(body); 

obj['sub_webs'].splice(0,1)
obj['sub_webs'].splice(1,1)

JSON.stringify(obj);