require('../common/header.js');
require('../common/asdie.js');
require('../common/loading.js');
require('../common/common.js');


NProgress.start();
var wwx = require('../common/freestyle.js');

var cs_id = wwx.getSearch('cs_id');

$.get('/v6/course/picture', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 2;
        $('#course-edit2').append(template('course-edit2-tpl', data.result));
    }
})