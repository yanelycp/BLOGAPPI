function register(){
    var nombre=$("#nombre").val();
    var email=$("#email").val();
    var password=$("#password").val();
   // var verificarPassword=$("#verificarPassword").val();
console.log(nombre,email,password);
    
RegistrarmeApi.register(name,email,password)
    .then(function(response)
    {
        console.log("successfully: ",token);
        //TODO:REGISTRAR EL TOKEN EN LOCALSTORAGE TAMBIEN DEBEMOS REDIRECCIONAR AL INDEX
        var token=response.token;
        window.localStorage.setItem("token", token);
        window.location="index.html";
    })
    .catch(function(error){
        alert("error: intentelo nuevamente");
        console.log("Error: ",error );
    });
}

window.onload=function(){
    $("#btnregistrarme").click(function(){
        register();
    })
}

