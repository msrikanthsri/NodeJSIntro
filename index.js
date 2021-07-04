//access files
/*const filesystem=require("fs/promises");
//create file
filesystem.writeFile("first.txt","Hello Ecveyone");
filesystem.appendFile("first.txt"," this is appened again")

//delete file
filesystem.unlink("first.txt");

//create folder
 filesystem.mkdir("second");
 //delete folder
 filesystem.rmdir("second");
*/

//OS
const opeartingsystem=require("os");
console.log(opeartingsystem.platform());
console.log(opeartingsystem.arch());

//environment-- It will pass variables only in run time not in compile time,to secure the dats
console.log(process.env)

//create server
const http=require("http");
http.createServer((request,response)=>{
    console.log(request.headers);
    response.end("Helo")
}
    )
.listen(3000)