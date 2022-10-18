// const { MqttClient } = require('mqtt')
// const mqtt = require('mqtt')


// let express = require('express');
// let app = express();

// const host = '127.0.0.1'
// const port = '1886'
// const bodyParser = require("body-parser");

// const connectUrl = `mqtt://${host}:${port}`

// const clientId = `mqtt_nodejs`

// const client = mqtt.connect(connectUrl, {
//   clientId,
//   clean: true,
//   connectTimeout: 4000,
//   username: 'Senergy',
//   password: 'Senergy',
//   reconnectPeriod: 1000,
// })
// app.use(express.static(__dirname));

// const clientPG = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'Modbus',
//     password: 'postgres',
//     port: 5432,
//   })
  
//   clientPG.connect()
  
//   const clientErrorListener = error =>{
//     console.log(error)
//   }
  
//   clientPG.on('error',clientErrorListener)
  
//   //READ MQTT SUBSCRIPTION PACKET
//   const topic = "trinity-m1"
//   var message = "NULL"
  
//   client.subscribe(topic)
  
//   client.on("message", function (topic, payload) {
//     let date_ob = new Date();
  
//   hours = date_ob.getHours();
//   minutes = date_ob.getMinutes();
//   seconds = date_ob.getSeconds();

  
//   timeStamp = hours + ":" + minutes + ":" +seconds;
//   console.log(timeStamp)

//   const writeString = 'INSERT INTO public."Parameters" ("Voltage V1N", "Voltage V2N", "Voltage V3N","Average Voltage LN","Current I1","Current I2","Current I3","Average Current","kW1","kW2" ,"kW3","kVA1","kVA2","kVA3","kVAr1","kVAr2","kVAr3","Total KW","Total KVA"Total KVAr","PF1","PF2","PF3","Average PF","Frequency","Total net kWh","Total net kVAh ", "Total net kVArh", "kW Max Active Power", "kW Min Active Power","kVAr Max Reactive Power","kVAr Min Reactive Power","kVA Max Apparent Power","Neutral Current","Time") VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11,$12,$14,$15,$16,$17,$18,$19,$20,,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34)'
// //   const writeValues = [timeStamp, 'm1', payload.toString()]
// })
// clientPG.query(writeString, writeValues, (err, res) => {
//     if (err){
//         console.log(err.stack)
//     } else {
//         console.log(res.rows)
//     }
//   })
//     // client.end()

  


// app.listen(3001, function(){
//     console.log("Server started on port 3001");
//   }); 