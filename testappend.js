var fs = require('fs');
function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(resolve, milisec)
    });
}

wait(0).then(() => {
    fs.readFile('testpro2.txt', 'utf8', function(err, data) {
  console.log(data);
});
    return wait(2000);
}).then(() => {
    fs.appendFile('testpro2.txt', '\n Hello! this is test ', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
    return wait(1000);
}).then(() => {
    fs.readFile('testpro2.txt','utf8', function(err,data){
        console.log(data);
    })
})
