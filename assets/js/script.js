function check(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email){
        document.getElementById("email").style="border:2px solid green;"
    }
    else{
        document.getElementById("email").style="border:1px solid red;"
    }
    if (password){
        document.getElementById("password").style="border:2px solid green;"
    }
    else{
        document.getElementById("password").style="border:1px solid red;"
    }
}