// [MITM]
// hostname = api.zhihu.com
// http-response https?://api.zhihu.com/topstory/follow script-path=https://github.com/linzx91/surge-ruleset/raw/master/Ruleset/Scripts/Zhihu_Feed.js

var obj = JSON.parse(body);

obj1=obj['data'];

obj1.forEach(function (element, index, array) {
     if(element.hasOwnProperty('ad')){      
       obj1.splice(index,1)  
    }

   });

obj['data']=obj1

JSON.stringify(obj);