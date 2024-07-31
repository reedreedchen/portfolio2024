import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express, { json } from "express";
import fs from "fs"

const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(express.static('public'));
const _dirname = dirname(fileURLToPath(import.meta.url));

var data;
fs.readFile(_dirname+"/public/data/data.json","utf8", 
    (err, _data) => 
    {
        if (err) throw err;
        data=JSON.parse(_data);
    }); 

app.listen(port, ()=>{
    console.log(`server started on port: ${port}`);
});

app.get("/", (req, res)=>
{
    res.render("index.ejs");
});

app.get("/content", (req, res)=>
{
    res.render("content.ejs", {data: data});
});

app.get("/contact", (req, res)=>
{
    res.render("contact.ejs");
});