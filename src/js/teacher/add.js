require('../common/header.js');
require('../common/asdie.js');
$('#teacher-add-Form').ajaxForm({
    // delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('恭喜打开新世界大门')
        }
    }
})