require('../common/header.js');
require('../common/asdie.js');

require('../common/loading.js');
require('../common/common.js');


NProgress.start();
var wxx = require('../common/freestyle.js');

var cg_id = wxx.getSearch('cg_id');
$.get('/v6/category/edit', {
        cg_id: cg_id
    },
    function(data) {
        $("#category-edit").html(template('edit-tpl', data.result))
    })


$('#edit-tpl-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('让我freestyle给你听~')
        }
    }
})