var fs = require('fs');
fs.appendFile('mynewFile.txt','Hello Content',function(err){

if(err) throw err;
console.log('Saved! mynewFile');

});

fs.open('mynew2File.txt','w', function(err){
    
    if(err) throw err;
    console.log('Saved mynew2File');
});
