/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay = 35;
var daysSelected = 0;
var monButton = document.getElementById("monday");
var tuButton = document.getElementById("tuesday");
var wedButton = document.getElementById("wednesday");
var thButton = document.getElementById("thursday");
var friButton = document.getElementById("friday");
var clearButton = document.getElementById("clear-button");
var halfDay = document.getElementById("half");
var fullDay = document.getElementById("full");
halfDay.addEventListener("click", half);
fullDay.addEventListener("click", full);
clearButton.addEventListener("click", reset);
monButton.addEventListener("click", () => {changeColour("m")});
tuButton.addEventListener("click", () => {changeColour("tu")});
wedButton.addEventListener("click", () => {changeColour("w")});
thButton.addEventListener("click", () => {changeColour("th")});
friButton.addEventListener("click", () => {changeColour("f")});

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function changeColour(day) 
{
	switch(day)
	{
	case "m":
		monButton.className = "clicked small-button blue-hover";
		daysSelected += 1;
		//calculate();
		break;
	case "tu":
		tuButton.className = "clicked small-button blue-hover";
		daysSelected += 1;
		//calculate();
		break;
	case "w":
		wedButton.className = "clicked small-button blue-hover";
		daysSelected += 1;
		//calculate();
		break;
	case "th":
		thButton.className = "clicked small-button blue-hover";
		daysSelected += 1;
		//calculate();
		break;
	case "f":
		friButton.className = "clicked small-button blue-hover";
		daysSelected += 1;
		//calculate();
		break;
	}
	calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function reset()
{
	monButton.className = "";
	tuButton.className = "";
	wedButton.className = "";
	thButton.className = "";
	friButton.className = "";
	costPerDay = 0;
	daysSelected = 0;
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function half()
{
halfDay.className = "clicked small-button blue-hover";
fullDay.className = "";
costPerDay = 20;
calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function full() 
{
fullDay.className = "clicked small-button blue-hover";
halfDay.className = "";
costPerDay = 35;
calculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate()
{
	var calculatedCost = costPerDay * daysSelected;
	document.getElementById("calculated-cost").innerHTML = calculatedCost;
}

