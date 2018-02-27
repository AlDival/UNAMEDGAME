var attempts = 0;

function login(){
    var button = document.getElementById('hint');
    var hint = document.getElementById('output');
    var Password = document.getElementById('Password').value;
    var realPword = '2479778659434212411';
    
    if(Password === realPword){
        window.location.href = 'index.html' 
        
    }

    else if(attempts === 3) {
        hint.innerHTML = 'More than 3 attempts, Jeez I feel bad for you. Heres the  pword: ' + realPword;
        button.innerHTML = ''
    }

    else{
        attempts++;
    }
}

function hint(){
    var button = document.getElementById('hint');
    var hint = document.getElementById('output');
    button.innerHTML = '';
    hint.innerHTML = 'Piss off, I don\'t need a hint';
}