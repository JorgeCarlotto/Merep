const mysql = require("mysql");

const con=mysql.createConnection({  
    host: "localhost",
    port: 3308,
    user:'root',
    password:'root',
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