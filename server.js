var express=require("express");
var app=express();
app.get("",function(req,res){
    var result={ipaddress:req.ip,language:req.headers["accept-language"],sofeware:req.headers["user-agent"]};
    //console.log();
    res.json(result);
    res.end();
});
app.listen(process.env.PORT ||8080,function(){
    console.log("listen to port : process.env.PORT ||8080");
});