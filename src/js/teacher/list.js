require('../common/header.js');
require('../common/asdie.js');



$.get('/v6/teacher', function(data) {
    $('#teacher-template').html(template('teacher-list-tpl', data.result))
})

/**
 * 讲师启用与注销
 * 
 * 1.因为按钮是随着列表动态渲染生成的,所以必须要使用事件委托,不然绑定不到
 * 2.通过自定义属性点击时拿到按钮身上的接口
 * 3.请求接口
 */