require('../common/header.js');
require('../common/asdie.js');
require('../common/loading.js');
require('../common/common.js');


NProgress.start();
$.get('/v6/course', function(data) {
    if (data.code == 200) {
        $('#course-list-tpl').html(template('course-list', data.result));
    }
})