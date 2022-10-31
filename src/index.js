const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname,'../public')))
// app.get("",(req,res)=>{
//     res.send('amiya or wot');
// })

app.set('view engine','hbs');
const templatePath=path.join(__dirname,"../templates/views");
app.set("views",templatePath);
const partialPath=path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about.hbs');
})
app.get("/weather",(req,res)=>{
    res.render('weather.hbs');
})
app.get("*",(req,res)=>{
    res.send('404 Error page');
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})