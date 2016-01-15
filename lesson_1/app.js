/**
 * Created by lenovo on 2016/1/15.
 */
var http = require("http");
var fs = require("fs");
var onRequest = function (req, res) {
    render(res, "./view/index.html", function (err, data) {
        console.log(JSON.stringify(err));
        var mes=(err==null?data:"<font style='color:red'>程序出现错误,错误原因:"+err.toString()+"</font>");
        print(res, mes);
    })
    //res.write("第一个 Node程序");
    //
    //res.end();
}
var render = function (res, html, callback) {
    fs.readFile(html, function (err, data) {
        if (callback) {
            callback(err, data);
        }
    });
}
var print = function (res, data) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    res.write(data);
    res.end();
}
var server = http.createServer(onRequest);
server.listen(8022, function () {
    console.log("服务器程序已经启动...");
});
