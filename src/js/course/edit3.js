require('../common/header.js');
require('../common/asdie.js');
require('../common/loading.js');
require('../common/common.js');
/**
 * 功能点:
 * 数据回显
 * 编辑章节
 * 添加章节
 */


var wxx = require('../common/freestyle.js');

var cs_id = wxx.getSearch('cs_id');

/*
 页面数据回显
 拿到location.search里面的cs_id
 * */
$.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
    if (data.code = 200) {
        data.result.editIndex = 3;
        $('#course-edit3-tpl').append(template('course-edit3', data.result));
    }
})


//编辑
/*
 因为编辑列表是动态渲染的,所以需要用到事件委托来完成
 * */
$(document).on('click', '.btn-lesson-ed3', function() {
    var data = {
        ct_id: $(this).attr('data-id')
    }
    $.get('/v6/course/chapter/edit', data, function(data) {
        if (data.code == 200) {
            data.result.cs_id = cs_id;
            $('#chapterModal').html(template('course-edit3-tp', data.result))
        }

    });
});


//
$(document).on('click', '#btn-lesson-add', function() {
        $('#chapterModal').html(template('course-edit3-tp', { cs_id: cs_id }))
    })
    //更新章节列表.获取表单中的章节名称分钟秒.三个字段.还要获取ct_id字段\
    /*
     其中ct_id编辑和添加章节获取方式不一样
     如果是标记直接诶从表单获取即可
     如果是添加则需要用户传入对象的样子
     如果是添加章节,那么直接把对线push,如果编辑找到章节的下彪
     * */



$('#edit3-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.result) {
            alert('添加成功');
            $('#edit3-form').get(0).reset;
        } else {
            alert('修改成功')
        }
    }
})