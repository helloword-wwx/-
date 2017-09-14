/**
 * 给ajax添加loading
 * 1.我们通过js的方式拼写loading的html片段,把他添加懂啊body里面
 * 2.在ajax发送请求时.让loading显示
 * 3.在ajax请求完毕时让loading隐藏
//  */
var loadingHtml =
    '<div class = "overlay">' +
    '<img src ="/public/img/loading.gif"/>' +
    '</div>';

$('body').append(loadingHtml);



$(document).on("ajaxStart", function() {
    $('.overlay').show()
})



$(document).on("ajaxStop", function() {
    $('.overlay').hide()
})