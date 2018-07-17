function login(){
    var email=$("#email").val();
    var password=$("#password").val();
    console.log(email,password);
    
    LoginApi.login(email,password)
    .then(function(response)
    {
        console.log("successfully: ",token);
        //TODO:REGISTRAR EL TOKEN EN LOCALSTORAGE TAMBIEN DEBEMOS REDIRECCIONAR AL INDEX
        var token=response.token;
        window.localStorage.setItem("token", token);
        window.location="index.html";
    })
    .catch(function(error){
      //  alert("error: intentelo nuevamente");
        console.log("Error: ",error );
    });
}

function register(){
    var nombre=$("#name").val();
    var email=$("#email").val();
    var password=$("#password").val();
    var password2=$("#password2").val();

    if(password!=password2){
        alert("Las contraseñas son diferentes");
        return;
    }
   console.log(name,email,password);
    
    LoginApi.register(name,email,password)
    .then(function(response)
    {
        console.log("successfully: ",response);
        alert("error: intentelo nuevamente");
        login();
    })
    .catch(function(error){
        //alert("error: intentelo nuevamente");
        alert("error: intentelo nuevamente");
        console.log("Error: ",error );
       
    });
}

window.onload=function(){
    //to do: validar si existe un token mandalo al index
    
    

    $("#btnlogin").click(function(){
        login();
    })

    $("#btnregistrarme").click(function(){
        register();
    })
}