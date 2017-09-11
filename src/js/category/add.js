require('../common/header.js');
require('../common/asdie.js');

/**
 * 功能点:
 * 1.动态渲染顶级学科select
 *    a.请求接口获取数据.
 *    b.得到数据渲染后的模版,插入页面指定位置
 *    
 * 2.表单提交
 *    ajaxForm 方法会判断你传入的数据类型如果对象认为是 配置,函数认为是成功回调
 */
$.get('/v6/category/top', function(data) {
    if (data.code == 200) {
        $('#select-add-tpl').html(template('category-add-tpl', data.result))
    }
})

$('#category-add-form').ajaxForm(function(data) {
    if (data.code == 200) {
        alert('打开新世界大门')
    }
})