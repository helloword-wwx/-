require('../common/asdie.js');
require('../common/header.js');
require('../common/loading.js');
require('../common/common.js');

//个人中心
/**
 * 该页面功能点
 * 数据回显
 * 表单提交
 * 
 * 数据回显:
 * 1.请求借口获取当前用户的信息
 * 2.使用模版引擎把数据嵌套到模版当中,得到数据渲染后的模版
 * template
 */
NProgress.start();
$.ajax({
    url: '/v6/teacher/profile',
    type: 'get',
    success: function(data) {
        if (data.code == 200) {
            console.log(data.result)
            $('.teacher-profile').html(template('template-profile', data.result));
        };
    }
});


$('#teacher-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('装逼成功')
        };
    }
});