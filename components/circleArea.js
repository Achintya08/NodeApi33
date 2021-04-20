function area(radius,res){
    const areaa =  Math.PI * radius * radius  ;
    res.setHeader("Content-Type","text/html");
    res.write(`<p>area  of circle is ${areaa}</p>`);
    res.end();
    }
    
    module.exports.area = area;