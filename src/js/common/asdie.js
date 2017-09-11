/**
 * 导航三个功能特点:
 * 1.用户信息展示
 * 2.点击标题子列表隐藏
 * 3.根据访问的页面,添加相对应的焦点
 */

/**
 * 读取storage/userinfo数据
  但是数据是字符串.使用JSON.parse转为对象
  人呐喊把对象的名字于头像设置到导航对应的标签
 * 
 */
var userinfoStr = localStorage.getItem('userinfo');
var userinfo = JSON.parse(userinfoStr);
$('.aside img').attr('src', userinfo.tc_avatar);
$('.aside h4').text(userinfo.tc_name);



/**
 * 点击标题子列表显示隐藏.
 * 1.获取导航中的a标签绑定点击时间
 * 2.事件出发的时候,让他的下一个兄弟元素ul显示.
 * 
 */

$('.navs a').on('click', function() {
    $(this).next('ul').slideToggle();
})


/**
 * 根据访问的页面给对应的标题添加焦点
 * 1.获取首页location.pathname
 * 2.获取全部a标签.先统一取出类名active
 * 3.然后利用这个值和和导航a标签的href去匹配得到对应的a标签,添加active
 */
var path = location.pathname;
$('.navs a').removeClass('active');
$('.navs a[href ="' + path + '"]').addClass("active").parents('ul').show();