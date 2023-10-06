

function isikukood(id_code){
	kood = id_code.toString()

	function kontrollnumber(id){
		tot = 1
		astmekaal = 1
		for (const i of id){
			tot += parseInt(i) * astmekaal
			if (astmekaal >= 9){
				astmekaal = 1
			}
			else{
				astmekaal += 1
				}
			}
		tot = tot % 11
		if (tot < 10){

			return tot
		}
		else{
			tot = 1
			astmekaal = 3
			for (const i of id){
			tot += parseInt(i) * astmekaal
			if (astmekaal > 9){
				astmekaal = 3
			}
			else{
				astmekaal += 1
			}
			}
			tot = tot % 11
			if (tot === 10){
				tot = 0
			}
			return tot
		}
		
	}
	let koodikehtivus = true 
	if (kontrollnumber(kood) != kood.slice(-1)){
		koodikehtivus = false
	}
	let controlnumber = kood[kood.length-1]
	let gender = ''
	let birthyear = ''
	let birthmonth = kood[3] + kood[4]
	let birthday = kood[5] + kood[6]
	let birthplace = parseInt(kood[7] + kood[8] + kood[9])
	let birthorder = kood[9]
	// birthplcace
	if (birthplace < 11){
		birthplace = "Kuressaare haigla"
	}
	else if (birthplace < 20){
		birthplace = "Tartu Ülikooli Naistekliinik"
	}
	else if (birthplace < 151){
		birthplace = "Ida-Tallinna Keskhaigla või Pelgulinna sünnitusmaja"

	}
	else if (birthplace < 221){
		birthplace = "Ida-viru keskhaigla"
	}
	else if (birthplace < 271){
		birthplace = "Maarjamõisa kliinikum"
	}
	else if (birthplace < 371){
		birthplace = "Maarjamõisa kliinikum"
	}
	else if (birthplace < 421){
		birthplace = "Pärnu haigla"
	}
	else if (birthplace < 471){
		birthplace = "Haapsalu haigla"
	}
	else if (birthplace < 491){
		birthplace = "Järvamaa haigla"
	}
	else if (birthplace < 521){
		birthplace = "Rakvere"
	}
	else if (birthplace < 571){
		birthplace = "Valga haigla"
	}
	else if (birthplace < 601){
		birthplace = "Viljandi haigla"
	}
	else if (birthplace < 701){
		birthplace = "Lõuna-Eesti haigla"
	}
	// gender
	if(parseInt(kood[0]) % 2 === 0){
		gender = 'naine'
	}
	else{
		gender = 'mees'	
	}
	//birthyear
	if (parseInt(kood[0]) < 3){
		birthyear = '18'
	}
	else if (parseInt(kood[0]) < 5){
		birthyear = '19'
	}
	else if (parseInt(kood[0]) < 7){
		birthyear = '20'
	}
	else if (parseInt(kood[0]) < 9){
		birthyear = '21'
	}
	birthyear += kood[1] + kood[2]
	// contorl number
	const resultInfo = {
		id_code: id_code
	}
	return resultInfo
	result = `isik isikukoodiga ${kood} on ${gender}. Kes on
	sündinud aastal ${birthyear}. Tema isikukood registreeriti asutuses 
	mis kannab nime ${birthplace} ja ta oli sel päeval 
	${birthorder}-s sündinu
	isikukoodi kontroll numbriks on ${controlnumber}.
	<br>
	<br>
	<a href="/">Valideeri uus kood</a>
	${koodikehtivus}
	 `

	return result
	
	

return `
<html>
	<head>
		<title> Isikuk654oodi valideerimine </title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet">
		</head>
		<body>
			<div> class="container">
				<h2> Isikukoodi valideerimine </h2>
		`
}

module.exports = {
	isikukood
}