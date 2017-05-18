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


