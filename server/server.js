import http from 'http';
const server = http.createServer((req, res) => {
    if(req.url=='/'){
        res.write('Home Page')
    }
    else if(req.url=='/about'){
        res.write('About Page')
    }
    else{
        res.write('404 Page Not Found')
    }
    res.end();

})
server.listen(5003,()=>{console.log('Server is listening on port 5003')})