
// //HP PC
// const mysql = require("mysql");


// const con=mysql.createConnection({  
//     host: '127.0.0.1',
//     port: 3306 , //3306 //3308
//     user:'root',
//     password:'asd123', //asd123  //root
//     database:'Merep'
// }); 

// con.connect(
//     (e)=>{
//         if(!e){
//             console.log("Servido conectado correctamente")
//         }else{
//             console.log("Error de conexión")
            
//         }
//     }
// );

// module.exports = con;


//Legion

const mysql = require("mysql");


const con=mysql.createConnection({  
    host: '127.0.0.1',
    port: 3308 , 
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