// $('.navs ul').prev('a').on('click', function() {
//     $(this).next().slideToggle();
// });
NProgress.start();
window.onload = function() {
        NProgress.done();
    }
    /*v
     1.我们现在前端拿到本地cookie.看看其中有没有PHPSESSID这一项
    如果有就认为用户已经登录. 没有的话就没有登录
    2.突破哪个国location.path判断用户是否在登录页面.还是在其他页面

    3.登录页面已经登录转到首页,其他页面未登录转到登陆页面.
     * */
    //用户是否已经登录
var islogin = !!$.cookie('PHPSESSID');

var isloginPage = location.pathname == '/dist/html/user/login.html';

if (isloginPage && islogin) {
    location.href = '/dist'
} else if (!isloginPage && !islogin) {
    location.href = '/dist/html/user/login.html';
}