var fs = require('fs');

 function getName(name) {
    return new Promise((resolve,reject )=> {
            if(name){
                resolve(name);
            }else{
                reject("you need input name");
            }
    });
}
getName('testpro.txt')
.then((name) => {
    fs.writeFile(name,data,(err)=>{
        if(err) throw err;
        console.log("created !");
    })
    return getName(name);
})
.then((name) => {
    fs.appendFile(name,data2,(err)=>{
        if(err) throw err;
    })
    return getName(name);
})
.then((name) => {
    fs.readFile(name,"utf8",(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
})
var data = "this is edit file \n";
var data2 = "this is add data  \n";
