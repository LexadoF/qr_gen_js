const express = require('express');
const ejs = require('ejs');
const path = require('path');
const qr = require('qrcode');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res, next)=>{
    res.render('index');
});

app.post('/scan', (req, res, next)=>{
    const input = req.body.text;
    qr.toDataURL(input, (err, src)=>{
        res.render('scan', {
            qr_c: src
        });
    })
});

app.listen(port, console.log(`port ${port} activo`));