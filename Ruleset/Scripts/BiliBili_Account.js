// [MITM]
// hostname = api.bilibili.com, app.bilibili.com
// http-response https?://app.bilibili.com/x/v2/account/mine script-path=https://github.com/linzx91/surge-ruleset/raw/master/Ruleset/Scripts/BiliBili_Account.js

var obj = JSON.parse(body);

obj['data']['sections'].splice(0,1)
obj['data']['sections'][0]['items'].splice(3,1)
obj['data']['sections'][0]['items'].splice(4,3)
obj['data']['sections'][1]['items'].splice(1,3)

JSON.stringify(obj);