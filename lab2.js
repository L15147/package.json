var http = require('http');
var fs = require('fs');
var mayTinh = require('./may_tinh');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var url = request.url;
    if (url == '/') {
        fs.readFile('index.html', function (error, data) {
            if (error == null) {
                console.log(data);
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });
    } else if (url == '/login') {
        response.end("Chao mung den Login");
    } else if (url == '/insert') {
        fs.writeFile('test.txt', 'Ghi vao file lan 2', function (error) {
            if (error == null) {
                response.end("Ghi thanh cong");

            } else {
                response.end(error);
            }
        });

    } else if (url == '/append') {
        fs.appendFile('test.txt', 'Ghi vao file lan 2', function (error) {
            if (error == null) {
                response.end("Ghi thanh cong");

            } else {
                response.end(error);
            }
        });

    } else if (url == '/unlink') {
        fs.unlink('test.txt', function (error) {
            if (error == null) {
                response.end("Xoa thanh cong");

            } else {
                response.end(error);
            }
        });

    } else if (url == '/rename') {
        fs.rename('test.txt', 'test2.txt', function (error) {
            if (error == null) {
                response.end("Rename thanh cong");

            } else {
                response.end(error);
            }
        });
    } else {
        response.end("404 not found");
    }
}).listen(8181);
