// [MITM]
// hostname = api.zhihu.com
// http-response https?://api.zhihu.com/v4/questions script-path=https://github.com/linzx91/surge-ruleset/raw/master/Ruleset/Scripts/Zhihu_Answer.js

var obj = JSON.parse(body);

delete obj['ad_info']

JSON.stringify(obj);