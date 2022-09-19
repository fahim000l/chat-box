
document.getElementById('login-btn').addEventListener('click', function () {
    let emailIn = document.getElementById('email-in');
    let emailText = emailIn.value;

    let passwordIn = document.getElementById('password-in');
    let passwordText = passwordIn.value;

    if ((emailText == 'fahim' && passwordText == '12345') || (emailText == 'rafin' && passwordText == '123456789')) {
        // setUserName('fahim');

        if (emailText == 'fahim') {

            window.location.href = "chat.html"

            localStorage.setItem('Profile', 'Fahim');
        }
        else {

            window.location.href = "chat.html"

            localStorage.setItem('Profile', 'Rafin');
        }


        // let compressedFunc = localStorage.getItem('compressedFunc');
        // let setName = eval('(' + compressedFunc + ')');
        // setName();

        // console.log('entered');
    }
    else {
        alert('Incorrect email and password');
    }
});

// window.localStorage.setItem('profile', setName('fahim'));