var prevPassword = document.getElementById('idRegPassword').value;
var prevPasswordCheck = document.getElementById('idRegPasswordCheck').value;

function checkPassword(){
    var password = document.getElementById('idRegPassword').value;
    var passwordCheck = document.getElementById('idRegPasswordCheck').value;

    var inputRegPassword = document.getElementById('idRegPassword');
    var inputRegPasswordCheck = document.getElementById('idRegPasswordCheck');
    
    var nickName = document.getElementById('idRegNickname').value;
    var regNickBox = document.getElementById('idRegNickname');


    if(password === '' && passwordCheck === '' && nickName === ''){
        inputRegPassword.style.backgroundColor = 'rgb(255, 150, 150)';
        inputRegPasswordCheck.style.backgroundColor = 'rgb(255, 150, 150)';
        regNickBox.style.backgroundColor = 'rgb(255, 150, 150)';
        return
    }

    if(password !== passwordCheck){
        inputRegPassword.style.backgroundColor = 'rgb(255, 150, 150)';
        inputRegPasswordCheck.style.backgroundColor = 'rgb(255, 150, 150)';
        inputRegPasswordCheck.value = "";
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
    }
}

function nicknameCheck(){
    var nickName = document.getElementById('idRegNickname').value;
    var regNickBox = document.getElementById('idRegNickname');

    var nicksArray = ["dumal", "du_m_al", "dumal18"]

    if(nicksArray.includes(nickName)){
        regNickBox.style.backgroundColor = 'rgb(255, 150, 150)';
    }
    else{
        regNickBox.style.backgroundColor = 'rgb(160, 247, 160)';
    }

    if(nickName === ''){
        regNickBox.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}