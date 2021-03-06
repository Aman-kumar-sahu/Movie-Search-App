var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");

app.get("/results",function(req,res){
  	var search=req.query.find;
	var url="http://omdbapi.com/?s="+search+"&apikey=thewdb";
	request(url,function(error,response,body){
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render("apiSearch",{data:data})
		}
	});
});

app.get("/",function(req,res){
	res.render("home");
});

app.listen(process.env.PORT||3000,process.env.IP,function(){
	console.log("COnnected!!");
});



