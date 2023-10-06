const express = require("express")
const app = express()

const path = require("path")
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const parseUrl = require("body-parser");
let encodeUrl = parseUrl.urlencoded({ extended: true});

let error = null
app.get('/', (req, res) => {
	res.render("page", {data: null, error: error})
})


const validId = require("./validate")

app.post("/", encodeUrl, (req, res) => {
	let error = null
	if(req.body.id_code === ""){
	error = "Palun sisesta vormis andmed"

	} else if(req.body.id_code.length < 11){
		error = "palun siste korrektne isikukood"

	}
	if(error === null){
		res.render("page", {
			data: validId.isikukood(req.body.id_code),
			error: null
		})

	}else {
		res.render("page", {data: null, error: error})
	}

	//res.render("page", {data: validId.isikukood(req.body.id_code)})	
})

app.listen(3000, () => {
	 console.log(`Example app is started at http://localhost:3000`)
})
