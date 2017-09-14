require('../common/asdie.js');
require('../common/header.js');
require('../common/loading.js');
require('../common/common.js');


NProgress.start();
var wxx = require('../common/freestyle.js');
//模版渲染
var cs_id = wxx.getSearch('cs_id');
$.get('/v6/course/basic', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 1;
        $('#course-edit-tpl').append(template('course-edit1', data.result));
    }
})

$(document).on('change', '#category-top-edit1', function(data) {
    //selected的val就是用户所选的顶级列表id
    var topCg = $(this).val();
    // 利用顶级学科cg_id获取对应子级学科列表
    $.get('/v6/category/child', { cg_id: topCg }, function(data) {
        var html = '';
        var childlist = data.result;
        if (data.code == 200) {
            for (var i = 0; i < childlist.length; i++) {
                html += '<option value = "' + childlist[i].cg_id + '" > ' + childlist[i].cg_name + ' </option>'
            }
        }
        $('#category-child-edit1').html(html);
    })
})

//表单提交
$('#course-ed1-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('扬帆起航');
            location.href = '/dist/html/course/edit2.html?cs_id=' + cs_id;
        }
    }
})