const mysql = require("mysql");


const con=mysql.createConnection({  
    host: '127.0.0.1',
    port: 3308, //3306
    user:'root',
    password:'root', //asd123
    database:'Merep'
}); 

con.connect(
    (e)=>{
        if(!e){
            console.log("Servido conectado correctamente")
        }else{
            console.log("Error de conexión")
            
        }
    }
);

module.exports = con;