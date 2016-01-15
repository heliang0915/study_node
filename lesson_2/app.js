/**
 * Created by lenovo on 2016/1/15.
 */
var http = require("http");
var fs = require("fs");
var mime=require("mime");
var rootDir="./view/";
var onRequest = function (req, res) {
    var url=req.url;
    static(url,res);

}
function static(url,res){
    var type="";
    if(url=="/"){
        type="text/html";
    }else{
        type=mime.lookup(url);
    }
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
}
var server = http.createServer(onRequest);
server.listen(8022, function () {
    console.log("服务器程序已经启动...");
});
