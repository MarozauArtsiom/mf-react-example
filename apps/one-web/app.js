let proxy = require('express-http-proxy');
let app = require('express')();

app.use('/component-app', proxy('http://localhost:3001'));
app.use('/lib-app', proxy('http://localhost:3000'));
app.use('/app', proxy('http://localhost:3002'));

app.get('/health-check', (_req, res) => {
    res.send('OK');
});

app.listen(6969, () =>{
    console.log('Server started on port 6969');
})