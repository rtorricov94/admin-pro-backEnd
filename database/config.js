const mongoose = require('mongoose');
/*const mysql      = require('mysql');
const dbConnection = async ()=>{
   await mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'RESTAURANTE'
}); 
console.log('BD en linea');
}*/


const dbConnection = async()=>{   try{
        await mongoose.connect(process.env.DB_CNN,{
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            // useCreateIndex:true
        }
        );
 
      console.log('BD en linea');
    }
    catch(error){
        console.log(error);
    }
}
module.exports = {
    dbConnection
}