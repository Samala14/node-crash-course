const http = require('http');

const fs = require('fs');

const _ = require('lodash');

const server = http.createServer((req, res) => {
   // console.log(req.url, req.method);
 
// using lodash

    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(()=> {
        console.log('hello');

    });
    greet();
    greet();


    // set headers and content-type

    res.setHeader('content-type', 'text/html');

    // res.write('<head><link rel="StyleSheet" href="#"></head>');
    // res.write('<p>hello, samala</p>');
    // res.write('<p>hello again, samala</p>');


    let path = './views/' ;
    switch(req.url) {
        case '/':
            path += '/index.html'
            res.statusCode = 200;
            break;
        case '/about' :
            path += './about.html'
            res.statusCode = 200;
            break;
        case '/about-blash' :
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default :
            path += './404.html'
            res.statusCode = 404;
            break

    }

    // send html page

    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
           // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localHost', () => {
    console.log('listening to the request on port 3000')

});