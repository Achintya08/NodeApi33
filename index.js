const http = require("http");
const url = require("url");
const volumefile = require("./components/volumeSphere");
const surfaceAreafile = require("./components/surfacearea");
const areafile = require("./components/circleArea");

http
    .createServer(function(req,res){
        const path = req.url;
        const quertyParam = url.parse(
            path, true).query;
       if(path.includes("metrics")){
           const object = quertyParam.object;
           const metric = quertyParam.metric;
           const radius = quertyParam.radius;
           if(object=="sphere" && metric=="volume"){
                volumefile.volumee(radius,res);
           }

           else if(object=="sphere" && metric=="surfaceArea"){
            surfaceAreafile.surfaceAreaa(radius,res);
           }

           else if(object=="circle"){
                areafile.area(radius,res);
           }
           else{
            res.write("Invalid request");
            res.end();
           }

       }
    }).listen(8080);