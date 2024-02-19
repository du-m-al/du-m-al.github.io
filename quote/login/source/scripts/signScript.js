var prevInputUsername = document.getElementById('idSignNickname').value;
var prevInputPassword = document.getElementById('idSignPassword').value;

var userName = 'dumal';
var password = 'qwerty';

function checkPassword(){
    var inputUsername = document.getElementById('idSignNickname');
    var inputPassword = document.getElementById('idSignPassword');

    var passwordInputError = document.getElementById('idPasswordMisError');

    var usernameInputError = document.getElementById('idNickExistError');

    if (inputUsername.value === ''){
        usernameInputError.textContent = 'Enter username.';
        usernameInputError.style.color = 'rgb(255, 150, 150)';
        inputUsername.style.backgroundColor = 'rgb(255, 150, 150)';
    }

    if (inputPassword.value === ''){
        passwordInputError.textContent = 'Enter password.';
        passwordInputError.style.color = 'rgb(255, 150, 150)';
        inputPassword.style.backgroundColor = 'rgb(255, 150, 150)';
        
    }
    
    if(inputUsername.value !== userName && inputUsername.value !== '' || inputPassword.value !== password && inputPassword.value !== ''){
        inputUsername.style.backgroundColor = 'rgb(255, 150, 150)';
        inputPassword.style.backgroundColor = 'rgb(255, 150, 150)';
        passwordInputError.textContent = 'Wrong password or username.';
        passwordInputError.style.color = 'rgb(255, 150, 150)';
    }
    if(inputUsername.value === userName && inputPassword.value === password){
        inputUsername.style.backgroundColor = 'rgb(160, 247, 160)';
        inputPassword.style.backgroundColor = 'rgb(160, 247, 160)';
    }
}

function onInput(){
    var inputUsername = document.getElementById('idSignNickname');
    var inputPassword = document.getElementById('idSignPassword');

    var passwordInputError = document.getElementById('idPasswordMisError');
    var usernameInputError = document.getElementById('idNickExistError');
    
    if(inputPassword.value !== prevInputPassword || inputUsername.value !== prevInputUsername || inputUsername.value === '' || inputPassword.value === ''){
        inputPassword.style.backgroundColor = 'white';
        inputUsername.style.backgroundColor = 'white';
        passwordInputError.style.color = 'transparent';
        usernameInputError.style.color = 'transparent';
    }
}








