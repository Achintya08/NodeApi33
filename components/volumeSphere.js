function volumee(radius, res){
const volume = 4/3 * Math.PI * radius * radius * radius ;
console.log(volume);
res.setHeader("Content-Type","text/html");
res.write(`<p>Volume of sphere is ${volume}</p>`);
res.end();
}

module.exports.volumee = volumee;