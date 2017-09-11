$('#btn-logout').on('click', function() {
    $.ajax({
        url: '/v6/logout',
        type: 'post',
        success: function(data) {
            if (data.code == 200) {
                alert('九月不撸.先走一步');
                location.href = '/dist/html/user/login.html'
            }
        }
    })
})