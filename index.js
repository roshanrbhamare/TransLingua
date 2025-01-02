import express, { urlencoded } from"express"
import axios from "axios"
import env from "dotenv"
const port= 3000
const app= express()
env.config();
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));


app.get("/", (req,res)=>{
    res.render("index.ejs");
})


app.post("/translator", async (req,res)=>{
    try{
        const response= await axios.post( "https://free-google-translator.p.rapidapi.com/external-api/free-google-translator",{
            "translate": "rapidapi"
          },
            {
                params: {
                    from: "en",
                    to:req.body.to,
                    query:req.body.query,
                },
                headers: {
                    "Content-Type":"application/json",
                    "X-RapidAPI-Key": process.env.API_KEY,
                    "X-RapidAPI-Host": "free-google-translator.p.rapidapi.com",
                },
            })
        let result =response.data;
        res.render("solution.ejs", {query:req.body.query , translated:result.translation, data:result.translateTo})
    }catch(err){
        console.log(err);
    }
})

app.listen(port, ()=>{
    console.log("running on http://localhost:"+port);
})