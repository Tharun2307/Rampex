const http = require("http");
const url = require("url");
const users = require("./data");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    console.log(query);

    if(path === "/users" && req.method === "GET" && !query.id){
        res.statusCode = 200;
        res.end(JSON.stringify(users));
    }else if(path === "/users" && req.method === "GET" && query.id){
        const user = users.find(u => u.id == query.id);

        if(user){
            res.statusCode = 200;
            res.end(JSON.stringify(user));
        }else{
            res.statusCode = 404;
            res.end(JSON.stringify({message: "USer Not Found"}));
        }
    }else if(path === "/users" && req.method === "POST" && !query.id){
        let body = "";

        req.on("data", chunk=> {
            body += chunk;
        });

        req.on("end", ()=>{
            const newUser = JSON.parse(body);
            newUser.id = users.length + 1;
            users.push(newUser);

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "User Created Successfully",
                user: newUser
            }));
        });
    }else if( path === "/users" && req.method === "PUT" && query.id){
        let body = "";

        req.on("data", chunk =>  body += chunk);

        req.on("end", ()=>{
            const index =  users.findIndex(u => u.id == query.id);

            if(index === -1){
                res.statusCode = 404;
                res.end(JSON.stringify({
                    message: "User not Found"
                }));
                return;
            }

            const updatedData = JSON.parse(body);

            users[index] = {
                ...users[index],
                ...updatedData
            };

            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "User Updated",
                user: users[index]
            }));
        });
    }else if(path === "/users" && req.method === "DELETE" && query.id){
        const index = users.findIndex(u => u.id == query.id);

        if(index === -1){
                res.statusCode = 404;
                res.end(JSON.stringify({
                    message: "User not Found"
                }));
                return;
            }

            const deleteUser = users.splice(index, 1);

            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "User Deleted",
                user: deleteUser[0]
            }));


    }else{

        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Route not Found"
        }));
    }


})

server.listen(3000, ()=>{
    console.log("Server running successfully");
})