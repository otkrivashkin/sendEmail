function SubmitFormData() {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var password = $("#password").val();
    var message = $("#message").val();

    function showMessage(afterObj, message, borderObj) {
        $(afterObj).text(message).show(1111).delay(1111).hide(1111);
        $(borderObj).css({'border' : '2px solid red'}).delay(2000).queue(function(next){
            $(this).css({'border' : '1px solid gray'});
            next();
        });
    }

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    }

    if (firstName === '') {
        showMessage('.firstName', 'Хде имя!:)', "#firstName");

    } else if (firstName !== '' && firstName.length < 4) {
        showMessage('.firstName', 'сделай подлиннее имя:)', '#firstName');
    }
    else if (lastName === '') {
        showMessage('.lastName', 'Напичатай фамилию йо!', '#lastName');
    }
    else if (email === '') {
        showMessage('.email', 'лалала пошта нема айайай', '#email');
    }
    else if(email !== '' && !isValidEmailAddress(email)) {
        showMessage('.email', 'неправильно ты почту пишешь', '#email');
    }
    else if (phoneNumber === '') {
        showMessage('.phoneNumber', 'а позвонить?)', '#phoneNumber');
    }
    else if (password === '') {
        showMessage('.password', 'нам нужен твой пароль:)', '#password');
    }
    else if (message === '') {
        showMessage('.message', 'и пару слов про себя:)', '#message');
    }
    else if (message !== '' && message.length < 5) {
        showMessage('.message', 'и ещё чуть-чуть:)', '#message');
    }
    else {
        $.post("submit.php", {
            firstName: firstName,
            lastName: lastName,
                email: email,
            phoneNumber: phoneNumber,
            password: password,
                message: message },
            function(data) {
                $('#results').html(data);
                $('#myForm')[0].reset();
                $('#success').show(1200).delay(1800).hide(1200);
            });
    }
}


