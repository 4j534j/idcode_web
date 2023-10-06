const express = require("express")
const app = express()

const path = require("path")
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const parseUrl = require("body-parser");
let encodeUrl = parseUrl.urlencoded({ extended: true});

app.get('/', (req, res) => {
	res.render("page", {data: null})
})


const validId = require("./validate")

app.post("/", encodeUrl, (req, res) => {
	res.render("page", {data: validId.isikukood(req.body.id_code)})	
})

app.listen(3000, () => {
	 console.log(`Example app is started at http://localhost:3000`)
})
