require('../common/header.js');
require('../common/asdie.js');
require('../common/loading.js');
require('../common/common.js');
NProgress.start();
$('#teacher-add-Form').ajaxForm({
    // delegation: true,
    success: function(data) {
        if (data.code == 200) {
            location = '/dist/html/teacher/list.html'
        }
    }
})