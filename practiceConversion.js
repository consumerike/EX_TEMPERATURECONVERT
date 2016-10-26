//Figure out all the components you need:


//input field + ID + type of number
//Radio button group + ID 
	//radio button  + ID
	//radio button + ID
//Clear button + ID


//CSS Elements 
	//Green
	//Blue
	//Red

//Javascript Elements
	//Event handlers

//What does the user look at??
	//1. input a temperature
	//2. Determine the conversion type
	//3. Run one of the conversions
	//4. Display output
	//5. Display colorTempt
	//6. clear results



//Functions
	//toFahrenheit
	//To Celsius
	//Converter
	//get input
	//determine conversion type
	//output to DOM
	//colorText
	//Reset Form


//GET HTML BUILT >> GET CSS BUILT >>  >>>>>Place steps in order (functions especially)


// Get a reference to the variables through the DOM

var submit = document.getElementById("submit");
var reset = document.getElementById("reset");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (inputTemperature) {
	var F = document.getElementById("F");
	var C = document.getElementById('C');
	if (F.checked) {
		toFahrenheit(inputTemperature)
	}
	else if (C.checked) {
		toCelsius(inputTemperature)
	}
	else {
		alert("Please select a type of conversion");
	}
}


function toCelsius (inputTemperature) {
	 var outputTemp = (inputTemperature * 1.8) + 32;
	 outputToDom(outputTemp, "c");
}

function toFahrenheit (inputTemperature) {
	var outputTemp = (inputTemperature - 32) / (1.8);
	outputToDom(outputTemp, "f");
}

function checkInput () {
	var inputTemperature = document.getElementById('input_temperature').value;

	if (inputTemperature) {
		determineConverter(inputTemperature);
	} else {
		console.log("Please insert a number.");
	}

}

function getInput (input) {

}



function outputToDom (outputTemp, type) {
	var output = document.getElementById("output")
	if (type === "c") {
		if (outputTemp > 32) {
			output.innerHTML = '<p class="red">'+outputTemp+ '</p>';
		}
		else if (outputTemp < 0) {
			output.innerHTML = '<p class="blue">'+outputTemp+'</p>';
		}

		else {
			output.innerHTML = '<p class="green">'+outputTemp+'</p>';
		}
	}
	else {
		if (outputTemp > 90) {
			output.innerHTML = '<p class="red">'+outputTemp+ '</p>';
		}
		else if (outputTemp < 32) {
			output.innerHTML = '<p class="blue">'+outputTemp+'</p>';
		}

		else {
			output.innerHTML = '<p class="green">'+outputTemp+'</p>';
		}
	}	

	
	console.log("Color Text", outputTemp.toFixed(2), type);
}

function resetForm (input) {
	 document.getElementById('input_temperature').value = "";
	}




// Assign a function to be executed when the button is clicked
submit.addEventListener("click", checkInput); 
reset.addEventListener("click", resetForm);



