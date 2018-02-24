function login(){
    var Password = document.getElementById('Password').value;
    var realPword = '2479778659434212411';
    if(Password === '2479778659434212411'){
        window.location.href = 'index.html' 
        
    }

    else{
        document.getElementById('hint').innerHTML = 'Well I wonder what this is: 2479778659434212411';
    }
}