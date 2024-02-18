var prevPassword = document.getElementById('idRegPassword').value;
var prevPasswordCheck = document.getElementById('idRegPasswordCheck').value;
var PasswordMisError = document.getElementById('idPasswordMisError');
var NickExistError = document.getElementById('idNickExistError');

function checkPassword(){
    var password = document.getElementById('idRegPassword').value;
    var passwordCheck = document.getElementById('idRegPasswordCheck').value;

    var inputRegPassword = document.getElementById('idRegPassword');
    var inputRegPasswordCheck = document.getElementById('idRegPasswordCheck');
    
    var nickName = document.getElementById('idRegNickname').value;
    var regNickBox = document.getElementById('idRegNickname');

    if(nickName === ''){
        regNickBox.style.backgroundColor = 'rgb(255, 150, 150)';
        NickExistError.textContent = 'Enter Username.';
        NickExistError.style.color = 'rgb(255, 150, 150)';
    }


    if(password === '' && passwordCheck === ''){
        inputRegPassword.style.backgroundColor = 'rgb(255, 150, 150)';
        inputRegPasswordCheck.style.backgroundColor = 'rgb(255, 150, 150)';
        PasswordMisError.textContent = 'Enter password.';
        PasswordMisError.style.color = 'rgb(255, 150, 150)';
        return
    }



    if(password !== passwordCheck){
        inputRegPassword.style.backgroundColor = 'rgb(255, 150, 150)';
        inputRegPasswordCheck.style.backgroundColor = 'rgb(255, 150, 150)';
        inputRegPasswordCheck.value = "";
        PasswordMisError.textContent = "Password mismatch.";
        PasswordMisError.style.color = 'rgb(255, 150, 150)';
        return
    }
    else{
        inputRegPassword.style.backgroundColor = 'rgb(160, 247, 160)';
        inputRegPasswordCheck.style.backgroundColor = 'rgb(160, 247, 160)';
    }
}

function checkInputs(){
    var password = document.getElementById('idRegPassword').value;
    var passwordCheck = document.getElementById('idRegPasswordCheck').value;

    var inputRegPassword = document.getElementById('idRegPassword');
    var inputRegPasswordCheck = document.getElementById('idRegPasswordCheck');

    if (password === prevPassword || passwordCheck === prevPasswordCheck){
        inputRegPassword.style.backgroundColor = 'white'; // Сброс цвета фона
        inputRegPasswordCheck.style.backgroundColor = 'white';
        PasswordMisError.style.color = 'transparent';
    }
}

function nicknameCheck(){
    var nickName = document.getElementById('idRegNickname').value;
    var regNickBox = document.getElementById('idRegNickname');
    

    var nicksArray = ["dumal", "du_m_al", "dumal18"]

    if(nicksArray.includes(nickName)){
        regNickBox.style.backgroundColor = 'rgb(255, 150, 150)';
        NickExistError.textContent = 'Username already exist.';
        NickExistError.style.color = 'rgb(255, 150, 150)';
    }
    else{
        regNickBox.style.backgroundColor = 'rgb(160, 247, 160)';
        NickExistError.style.color = 'transparent';
    }

    if(nickName === ''){
        regNickBox.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}
