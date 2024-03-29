$(document).ready(function () {
    $('#nextBtn').on('click', function (event) {
        window.location.reload();
    });
});

//script is sending a POST request using AJAX in JSON format with user answer to the backend
$(document).ready(function () {
    $('.btn.btn-info').on('click', function (event) {
        let thisButton = $(this);
        let word = thisButton.text();
        $.ajax({
            data: {
                "word": word
            },
            type: 'POST',
            url: '/quiz'
        }).done(function (response) { // receiving responses from the backend
            if (response.status == 'right') {
                thisButton.removeClass('btn-info').addClass('btn-success');
                $('.btn.btn-info').attr("disabled", true);
            } else {
                thisButton.removeClass('btn-info').addClass('btn-danger');
            }
        });
        thisButton.attr("disabled", true);
    });
});