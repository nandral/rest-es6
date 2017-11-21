const PORT = process.env.PORT||5000;
const express = require("express");
const bodyParser =  require("body-parser");
const service = require("./api/service");

app = express();
app.use(bodyParser.json());


app.get("/",(req,res)=>{
	res.send({ hello:"Node WORLD !!!" })
});

app.post("/",(req,res)=>{
	if(!req.body.payload || !Array.isArray(req.body.payload)){
		return res.status(400).send({ error : "Could not decode request: JSON parsing failed" });
	}
	const processedRecords = service(req.body.payload)
	res.status(201).send({response:processedRecords});
})


app.listen(PORT,()=>{
	console.log(`Server started on ${PORT}`);
})

module.exports=app;
