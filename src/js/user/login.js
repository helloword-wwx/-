require('../common/loading.js');
require('../common/common.js');
//当英胡点击登录按钮的时候.这个插件ajaxForm会自动监听submit事件
//然后阻止浏览器默认的刷新提交,然后自动变成ajax的方式发送请求.
NProgress.start();
$('#login-form').ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert('登录成功,笑嘻嘻');
            localStorage.setItem('userinfo', JSON.stringify(data.result))
            location.href = '/dist'
        } else {
            alert('登录失败,妈卖批')
        }
    },
    error: function() {
        alert('登录失败,妈卖批')
    }
});

//头像
var userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
var tc_avatar = userinfo.tc_avatar || '/public/img/default.png'
$('.avatar img').attr('src', tc_avatar);


//原生jq
// $('#login-form').on('submit', function() {
//     $.ajax({
//         url: '/v6/login',
//         type: 'post',
//         data: $(this).serialize(),
//         success: function() {
//             if (data.code == 200) {
//                 alert('登录成功,笑嘻嘻')
//             } else {
//                 alert('登录失败,妈卖批')
//             }
//         },
//         error: function() {
//             alert('登录名不存在或密码错误')
//         },

//     });

//     return false; //jq中阻止浏览器默认事件 return false就好了.
// });