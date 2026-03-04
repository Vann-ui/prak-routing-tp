import * as http from 'http';

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if(url === "/"&& method === "GET"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({message:"Selamat Datang dihalaman home"}));
    } else if(url === "/about"&& method === "GET"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({message: "Halaman About"}));
    }else if(url === "/users"&& method === "GET"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({message: "User ID:$(ID)"}));
    }else{
        res.writeHead(200, {"content-type":"application/json"});
        res.end(JSON.stringify({message:"Router tidak ditemukan"}));
    }
})
server.listen(3000,()=>{
    console.log("Server Berjalan di http://localhost:3000");
});