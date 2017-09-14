require('../common/header.js');
require('../common/asdie.js');
require('../common/loading.js');
require('../common/common.js');


NProgress.start();
$('#course-add-form').ajaxForm(function(data) {
    if (data.code == 200) {
        location.href = '/dist/html/course/edit1.html?cs_id=' + data.result.cs_id;
    }
})