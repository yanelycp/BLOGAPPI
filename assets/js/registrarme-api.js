var RegistrarmeApi=(function(){

    //TODO : BASE URL
    var  baseUrl ="http://192.168.200.63:8080";
    //var  baseUrl ="http://127.0.0.1:8080/users",
    var PATH="/register";
    
    return {
        registrarme: function(nombre,email,password){
            return new Promise(function (resolve,reject) 
            {    
            var Id={
                nombre:nombre,
                email:email,
                password:password
                //verificarPassword:verificarPassword
            }    
    
            $.ajax({
                    method: 'POST',
                    data:JSON.stringify(Id),
                    url:baseUrl+PATH,
                    success:function(data){
                        resolve(data);
                    },
                    error:function (error){
                        reject(error);
                    }
                });     
        });
        }
    }
    
    })();//funcion que se invoca automaticamente