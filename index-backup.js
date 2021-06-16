const http = require('http');

const port = '8080';

http.createServer((req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('Hola mundo');
    // res.write('1, Fernando');
    // res.write('3, Yury');
    // res.write('4, Sebastian');

    res.end();
})
.listen(port);

console.log('Escuchando el puerto: ', port);