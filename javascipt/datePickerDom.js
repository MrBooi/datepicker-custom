document.addEventListener('DOMContentLoaded', function () {

// Get elements from the DOM
const dateSelectorElem = document.querySelector('.date-selector');
const selectedDateElem = document.querySelector('.date-selector .selected-date');
const datesElem = document.querySelector('.date-selector .dates');
const monthElem = document.querySelector('.date-selector .dates .month .mth');
const nextMonthElem = document.querySelector('.date-selector .dates .month .next-month');
const prevMonthElem = document.querySelector('.date-selector .dates .month .previous-month');
const daysElem = document.querySelector('.date-selector .dates .days');

//Instantiate the datePicker Factory function
let dateSelector = datePicker();

// get dates
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

let monthsList = dateSelector.getMonthsList();
monthElem.textContent = monthsList[month] + ' ' + year;

selectedDateElem.textContent =  dateSelector.getFormatedDate(date);
selectedDateElem.dataset.value = selectedDate;

let daysInMonthCurrent = dateSelector.getMonthDayNumber(month, year);
getDates(daysInMonthCurrent);
// Logic functions
function toggleDateSelected (element) {
	if (!dateSelector.getElementPath(element.path, 'dates')) {
		datesElem.classList.toggle('active');
	}
}

function getDates(element){
	daysElem.innerHTML = '';
	let dayNumberPerMonth = parseInt(element);
   
	
	for (let i = 0; i < dayNumberPerMonth ; i++) {
		const dayElem = document.createElement('div');
		dayElem.classList.add('day');
		dayElem.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			dayElem.classList.add('selected');
		}

		dayElem.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selectedDateElem.textContent =  dateSelector.getFormatedDate(selectedDate);
			selectedDateElem.dataset.value = selectedDate;
			let daysInMonthSelected = dateSelector.getMonthDayNumber(selectedMonth, selectedYear);
			getDates(daysInMonthSelected);
		});
		daysElem.appendChild(dayElem);
	}

}

function nextMonth (element){
    month++;
	if (month > 11) {
		month = 0;
		year++;
    }
    let daysInMonthNext = dateSelector.getMonthDayNumber(month, year);
	monthElem.textContent = monthsList[month] + ' ' + year;
	let checker = dateSelector.getMonthDayNumber(month);
	console.log("Next Month :", checker);
	getDates(daysInMonthNext);
}

function previousMonth(element) {
    month--;
	if (month < 0) {
		month = 11;
		year--;
    }
    let daysInMonthPrev = dateSelector.getMonthDayNumber(month, year);
	monthElem.textContent = monthsList[month] + ' ' + year;
	getDates(daysInMonthPrev);
	
}

dateSelectorElem.addEventListener('click', toggleDateSelected);
prevMonthElem.addEventListener('click', previousMonth);
nextMonthElem.addEventListener('click', nextMonth);

});