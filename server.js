const http = require('http'); 
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
let word = null
let resultObj={};
const server = http.createServer(function(req, res) { 
  const page = url.parse(req.url).pathname;// looking at url
  const params = querystring.parse(url.parse(req.url).query);
  

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
   
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api'){
   word = params.word
  let wordArray = word.split('')
  wordArray.reverse()
  console.log(wordArray.join(''))
  //console.log(wordArray.reverse(''))
  if (wordArray.join('') !== word){ 
  resultObj.message = `${word} is not a palindrome`
  }
  else{
    resultObj.message = `${word} is a palindrome`
  }
  
  res.writeHead(200, {'Content-Type': 'application/json'}); 


 res.write(JSON.stringify(resultObj));
res.end();  
}else {
    res.writeHead(404);
      res.end('404 - Not found');
    };
});
server.listen(8000);
