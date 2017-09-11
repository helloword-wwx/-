require('../common/header.js');
require('../common/asdie.js');

$.get('/v6/category', function(data) {
    $('.table-bordered').append(template('category-list-tal', data.result));
})