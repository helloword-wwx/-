require('../common/header.js');
require('../common/asdie.js');
require('../common/loading.js');
require('../common/common.js');



NProgress.start();
$.get('/v6/category', function(data) {
    $('.table-bordered').append(template('category-list-tal', data.result));
})