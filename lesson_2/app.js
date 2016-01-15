/**
 * Created by lenovo on 2016/1/15.
 */
var http = require("http");
var fs = require("fs");

var mime=require("mime");


var rootDir="./view/";
var onRequest = function (req, res) {

    var url=req.url;

    console.log(url);
    //
    //if(url=="/"){
    //    render(res, rootDir+"index.html", function (err, data) {
    //        var mes=(err==null?data:"<font style='color:red'>程序出现错误,错误原因:"+err.toString()+"</font>");
    //        print(res, mes);
    //    })
    //
    //}else if(url=="/style.css"){
    //    render(res, rootDir+"style.css", function (err, data) {
    //        var mes=(err==null?data:"<font style='color:red'>程序出现错误,错误原因:"+err.toString()+"</font>");
    //        print(res, mes,"css");
    //    })
    //}
    static(url,res);



}

function static(url,res){

    console.log(mime.lookup(url));
    var type="";
    if(url=="/"){
        type="text/html";
    }else{
        type=mime.lookup(url);
    }

    console.log("type>>"+type);
    res.writeHead(200, {
        'Content-Type': type+';charset=utf-8'
    });
    var fileName=url.substring(url.lastIndexOf("/")+1,url.length);
    if(url=="/"){
        fileName="index.html";
    }
    fileName=rootDir+fileName;
    fs.readFile(fileName,function(err,data){
        var mes=(err==null?data:"<font style='color:red'>程序出现错误,错误原因:"+err.toString()+"</font>");
        res.write(mes);
        res.end();
    });

    //render(res, rootDir+"index.html", function (err, data) {
    //    var mes=(err==null?data:"<font style='color:red'>程序出现错误,错误原因:"+err.toString()+"</font>");
    //
    //    res.writeHead(200, {
    //        'Content-Type': 'text/'+mime.lookup(url)+';charset=utf-8'
    //    });
    //    res.write(mes);
    //    res.end();
    //
    //})
}




var server = http.createServer(onRequest);
server.listen(8022, function () {
    console.log("服务器程序已经启动...");
});
