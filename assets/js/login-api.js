var LoginApi=(function(){

//TODO : BASE URL
var  baseUrl ="http://192.168.200.63:8080";
//var  baseUrl ="http://127.0.0.1:8080/users",
var PATH_LOGIN="/login";
var PATH_REGISTER="/register";
var PATH_LOGOUT="/logout";


return {
    login: function(email,password){
        return new Promise(function (resolve,reject) 
        {

        var Id={
            email:email,
            password:password
        }    

        $.ajax({
                method: 'POST',
                data:JSON.stringify(Id),
                url:baseUrl+PATH_LOGIN,
                success:function(data){
                    resolve(data);
                },
                error:function (error){
                    reject(error);
                }
            });     
    });
    },

    register: function(name,email,password){
        return new Promise(function (resolve,reject) 
        {    
        var Id={
            name:name,
            email:email,
            password:password
        }    

        $.ajax({
                method: 'POST',
                data:JSON.stringify(Id),
                url:baseUrl+PATH_REGISTER,
                success:function(data){
                    resolve(data);
                },
                error:function (error){
                    reject(error);
                }
            });     
    });
    },

    logout: function(token){
        return new Promise(function (resolve,reject) 
        {    
            $.ajax({
                method: 'DELETE',
                headers:{'Authorization':'Bearer '+token},    //utilizar para los demas 
                url:baseUrl+PATH_LOGOUT,
                success:function(data){
                    resolve(data);
                },
                error:function (error){
                    reject(error);
                }
            });     
    });
    },
}

})();//funcion que se invoca automaticamente