
/*Calling the Button submit, im using preventDefault with a callback event to not load the page till the logic is complete*/

document.querySelector(".button-submit").addEventListener("click", function(event){

event.preventDefault();

/*Calling the input id's*/ 

const dayIn= document.getElementById("day");
const monthIn= document.getElementById("month");
const yearIn= document.getElementById("year");


/*Using parseInl to convert the string into a number*/ 

const day = parseInt(dayIn.value);
const month = parseInt(monthIn.value) -1;
const year = parseInt(yearIn.value);

/*Const to have total years*/ 

const today = new Date();
const birthDay = new Date(year,month,day);

/* checking input errors */

let validInfo = true;

if(isNaN(day)|| day < 1 || day > 31){
    dayIn.parentElement.classList.add("error");
    dayIn.parentElement.querySelector(".error-day").style.display = "block";
    validInfo = false;
} 
if(isNaN(monthIn.value)|| month < 0 || month > 11){
    monthIn.parentElement.classList.add("error");
    monthIn.parentElement.querySelector(".error-month").style.display = "block";
    validInfo = false; 
}
if(isNaN(year)|| year > today.getFullYear()){
    yearIn.parentElement.classList.add("error");
    yearIn.parentElement.querySelector(".error-year").style.display = "block";
    validInfo = false;
}
if(!validInfo){
    return;
}

/*Getting the total Years*/ 

let yearTotal = today.getFullYear() - birthDay.getFullYear();
let monthTotal = today.getMonth() - birthDay.getMonth();
let dayTotal = today.getDate() - birthDay.getDate();

/* checking if the birthday of the user is a on a future date, this costs me a lot this is max knowledge i have for now... */ 

if(dayTotal < 0){
    monthTotal --;
    dayTotal += new Date(today.getFullYear(),today.getMonth(),0).getDate();
}

if(monthTotal < 0){
    yearTotal --;
    monthTotal += 12;
}

/* calling the final text */ 

document.querySelectorAll(".result")[0].textContent = yearTotal;
document.querySelectorAll(".result")[1].textContent = monthTotal;
document.querySelectorAll(".result")[2].textContent = dayTotal;

});











