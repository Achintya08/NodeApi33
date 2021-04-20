function surfaceAreaa(radius,res){
    const volume = 4 * Math.PI * radius * radius ;
    res.setHeader("Content-Type","text/html");
    res.write(`<p>Surface area of sphere is ${volume}</p>`);
    res.end();
    }
    
    module.exports.surfaceAreaa = surfaceAreaa;