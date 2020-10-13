const express = require('express');

const PORT = 3000;


const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());

const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'instrumentos_db',
    multipleStatements: true
});

connection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});


/*
connection.connect(function(err){
    (err)? console.log("Error " +err): console.log("Se conectó correctamente " + connection);
});
*/

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});

app.use("/images", express.static('images'));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/lista', function (req, res) {
    connection.query('SELECT * FROM instrumento WHERE baja IS NULL', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/lista/:id', (req, res) => {
    connection.query('SELECT * FROM instrumento WHERE id = ? AND baja IS NULL', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.post('/new', function(req, res, next) {
    connection.query("INSERT into instrumento(instrumento, marca, modelo, imagen, "
        + " precio, costoEnvio, cantidadVendida, descripcion)"
        + " VALUES ('"+req.body.instrumento+"', '"+req.body.marca+"', '"+req.body.modelo+"', '"
        +req.body.imagen+"', '"+req.body.precio+"', '"+req.body.costoEnvio+"', '"+req.body.cantidadVendida+"', '"+req.body.descripcion+"')", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
        
    });
});

app.post('/edit', function(req, res, next) {
    connection.query("UPDATE instrumento SET instrumento = '"+req.body.instrumento+"', marca = '"+req.body.marca+"', modelo = '"+req.body.modelo+"', "
    +"imagen= '"+req.body.imagen+"', precio= '"+req.body.precio+"', costoEnvio= '"+req.body.costoEnvio+"', cantidadVendida= '"+req.body.cantidadVendida+"', "
    +"descripcion= '"+req.body.descripcion+"' WHERE id = '"+req.body.id+'' + " AND baja IS NULL '", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

app.post('/delete', function(req, res, next) {
    connection.query("UPDATE instrumento SET baja = '"+req.body.baja+"' WHERE id = '"+req.body.id+"'", function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});