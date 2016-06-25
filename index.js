var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

fs.exists("./item.json", function (exists) {
    if (!exists) {
        fs.open("./item.json", "a", function (err, fd) {
            if (err) {
                console.log("文件不存在,创建不成功!");
            }
            else {
                fs.writeFileSync("./item.json", JSON.stringify([]));
            }

        });
    }
});

app.use(bodyParser.json());

app.use('/products', require('./product_router'));

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("listen on " + port);
});