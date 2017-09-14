require('../common/asdie.js');
require('../common/header.js');
require('../common/loading.js');
require('../common/common.js');

NProgress.start();
$('#repass-form').on('sumbit', function() {
    if ($('#newpsd').val() !== $('#newpsd-repeat').val()) {
        alert('再来一次baby,come')
        return false;
    };

    $('#repass-form').ajaxSumbit({
        success: function(data) {
            console.log(data)
        }
    })
})