const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const sqlite3 = require('sqlite3').verbose();

const Util = require('./Util')
const port = 5000

// open the database

// let sql = `SELECT * FROM depertment ORDER BY name`;
const DB_PATH = 'C:\\Users\\khawla jayousi\\Desktop\\finalproject\\project.db'
const DB = new sqlite3.Database(DB_PATH, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to ' + DB_PATH + ' database.')
});

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(cors())
app.use('/image', express.static('image'))
app.get('/', (req, res) => res.send('Hello World!'))


app.get('/Images', (req, res) => {

    DB.all('select id, name, mainimg, city, location from  depertment', (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})
app.get('/Dep', (req, res) => {

    DB.all('select id, name, mainimg, city, location from  depertment', (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})
app.get('/Custamer', (req, res) => {

    DB.all('select * from customer', (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})
app.get('/Stor', (req, res) => {

    DB.all('select id, name, mainimg, city, location from  stor', (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})
app.get('/Land', (req, res) => {

    DB.all('select id, name, mainimg, city, location from  land', (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})
app.get('/House', (req, res) => {

    DB.all('select id, name, mainimg, city, location from  home', (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})
app.get('/Imgdelail/Detail/image/:id', (req, res) => {
  var sql= "select * from depertment where id= ?"
  var params = [req.params.id]
  console.log(params)
    DB.all(sql, params, (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})
app.get('/Allimg/Detail/image/:id', (req, res) => {
    var sql= "select * from departmentimg where iddep= ?"
    var params = [req.params.id]
    DB.all(sql, params, (err, rows) => {
        if (err)
            console.log(err)
        res.send(rows)
    })
})

app.post('/Add/Adddep', function(req, res) {
    // Get sent data.
    var data = req.body;
    // Do a MySQL query.
    //var sql="INSERT INTO depertment ( name, type, city, location, leaftet1, leaflect2,  numberfloor,numberdepinfloor, numberdepinbuilding, lifetime, depcondition,east, brinda, ownername, ownerphone, totalprice, peymenttype, firstpayment, monthpeyment, timeperiod, sorttapu, mainimg,viseble,sold,landnumber,buytype,area, notes, areatype, west, north, south, garage, centralgas, lift) VALUES (?,?,?,?,?,?,?, ?,?,?,?,?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    var sql = `INSERT INTO depertment  ( name, type, city, location, leaftet1, leaflect2,  numberfloor,numberdepinfloor, numberdepinbuilding, lifetime, depcondition,east, brinda, ownername, ownerphone, totalprice, peymenttype, firstpayment, monthpeyment, timeperiod, sorttapu, mainimg,viseble,sold,landnumber,buytype,area, notes, areatype, west, north, south, garage, centralgas, lift) VALUES ('${data.name}','${data.type}','${data.city}','${data.location}','${data.leaftet1}',' ${data.leaflect2}', '${data.numberfloor}','${data.numberdepinfloor}','${data.numberdepinbuilding}', '${data.lifetime}',' ${data.depcondition}','${data.east}', '${data.brinda}', '${data.ownername}', '${data.ownerphone}', '${data.totalprice}', '${data.peymenttype}', '${data.firstpayment}', '${data.monthpeyment}', '${data.timeperiod}', '${data.sorttapu}', '${data.mainimg}','${data.viseble}','${data.sold}','${data.landnumber}','${data.buytype}','${data.area}', '${data.notes}','${data.areatype}', '${data.west}', '${data.north}', '${data.south}',' ${data.garage}', '${data.centralgas}', '${data.lift}')`
    //${data.name}'${data.type}${data.city}${data.location}${data.leaftet1}, ${data.leaflect2}, ${data.numberfloor},${data.numberdepinfloor}, ${data.lifetime}, ${data.depcondition},${data.east}, ${data.brinda}, ${data.ownername}, ${data.ownerphone}, ${data.totalprice}, ${data.peymenttype}, ${data.firstpayment}, ${data.monthpeyment}, ${data.timeperiod}, ${data.sorttapu}, ${data.mainimg},${data.viseble},${data.sold},${data.landnumber},${data.buytype},${data.area}, ${data.notes},${data.areatype}, ${data.west}, ${data.north}, ${data.south}, ${data.garage}, ${data.centralgas}, ${data.lift}
    //[data.name,data.type,data.city,data.location,data.leaftet1, data.leaflect2, data.numberfloor,data.numberdepinfloor, data.lifetime, data.depcondition,data.east, data.brinda, data.ownername, data.ownerphone, data.totalprice, data.peymenttype, data.firstpayment, data.monthpeyment, data.timeperiod, data.sorttapu, data.mainimg,data.viseble,data.sold,data.landnumber,data.buytype,data.area, data.notes,data.areatype, data.west, data.north, data.south, data.garage, data.centralgas, data.lift]
    var query = DB.run(sql, function(err, result) {
      // Neat!
      if(!err)
        res.send('Success');
      res.send(err.message)
    });
    
  });
  app.post('/Add/Addhouse', function(req, res) {
    // Get sent data.
    var data = req.body;
    // Do a MySQL query.
                                                                                                                                                                                                                                                                                                                                                                                
    var sql = `INSERT INTO home  ( name,leatance,logestec,type,city,location,buildingarea,floorarea,timelife,homecondition, ownername,ownernumber, totalprice,paymenttype,firstpayment,monthpeyment,timeperiod,landnumber,buytype, area,notes,areatype) VALUES ('${data.name}','${data.leatance}','${data.logestec}','${data.type}','${data.city}',' ${data.location}', '${data.buildingarea}','${data.floorarea}','${data.timelife}', '${data.homecondition}',' ${data.depcondition}' '${data.ownername}', '${data.ownerphone}', '${data.totalprice}', '${data.peymenttype}', '${data.firstpayment}', '${data.monthpeyment}', '${data.timeperiod}','${data.landnumber}','${data.buytype}','${data.area}', '${data.notes}','${data.areatype}')`
   var query = DB.run(sql, function(err, result) {
      // Neat!
      if(!err)
        res.send('Success');
      res.send(err.message)
    });
    
  });
  app.post('/Add/Addland', function(req, res) {
    // Get sent data.
    var data = req.body;
                                                                                                                                                                                                                                                                              
    var sql = `INSERT INTO land  ( name,type, buytype,city, location,leatance, logestec, area,ownername,ownerphone, notes,landnumber, areatype) VALUES ('${data.name}','${data.type}','${data.city}','${data.location}','${data.leatance}',' ${data.logestec}', '${data.ownername}', '${data.ownerphone}','${data.landnumber}','${data.buytype}','${data.area}', '${data.notes}','${data.areatype}')`
    var query = DB.run(sql, function(err, result) {
      // Neat!
      if(!err)
        res.send('Success');
      res.send(err.message)
    });
    
  });
  app.post('/Add/Addstor', function(req, res) {
    // Get sent data.
    var data = req.body;                                                                                                                                                                                                                                                                         
    var sql = `INSERT INTO stor  ( name,leatance,logestec,buytype, city, location, area,  ownername, ownerphone,totalprice,peymenttype,firstpeyment,monthpeyment,lifetime,sorttapu,mainimg,notes,landnumber,areatype) VALUES ('${data.name}','${data.city}','${data.location}','${data.leatance}',' ${data.logestec}',  '${data.lifetime}', '${data.ownername}', '${data.ownerphone}', '${data.totalprice}', '${data.peymenttype}', '${data.firstpayment}', '${data.monthpeyment}', '${data.sorttapu}', '${data.mainimg}','${data.landnumber}','${data.buytype}','${data.area}', '${data.notes}','${data.areatype}')`
   var query = DB.run(sql, function(err, result) {
      // Neat!
      if(!err)
        res.send('Success');
      res.send(err.message)
    });
    
  });
app.get('/Login', (req, res) => {

    if (req.query.username == "admin" && req.query.password == "123456")
        res.send(Util.makeid(50))
    else 
       res.send("err")
      
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
