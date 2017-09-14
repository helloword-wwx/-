 function getSearch(key) { // '?cg_id=1&cg_type=op'

     var searchStr = location.search.slice(1); // 'cg_id=1&cg_type=op'

     var searchArr = searchStr.split('&'); // ['cg_id=1', 'cg_type=op']

     var searchObj = {},
         tempArr;

     for (var i = 0, len = searchArr.length; i < len; i++) {
         tempArr = searchArr[i].split('='); // ['cg_id', 1]    ['cg_type', 'op']

         searchObj[tempArr[0]] = tempArr[1]; // { cg_id:1, cg_type: 'op' }

     }
     // 传了key返回指定的值，没传返回解析好的整个对象

     return key ? searchObj[key] : searchObj;
 }
 module.exports.getSearch = getSearch;