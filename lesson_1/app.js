/**
 * Created by lenovo on 2016/1/15.
 */
var http=require("http");
var onRequest=function(req,res){
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.write("第一个 Node程序");
    res.end();
}
var server=http.createServer(onRequest);
server.listen(8022,function(){
    console.log("服务器程序已经启动...");
});
