require('../common/asdie.js');
require('../common/header.js');

$('#repass-form').on('sumbit', function() {
    if ($('#newpsd').val() != $('$=#newpsd-repeat').val()) {
        alert('再来一次baby,come')
        return false;
    };

    $('#repass-form').ajaxSumbit({
        success: function(data) {
            alert(123)
            console.log(data)
        }
    });
    return false;
})