document.addEventListener('DOMContentLoaded', function () {

	// Get elements from the DOM
	const dateSelectorElem = document.querySelector('.date-selector');
	const selectedDateElem = document.querySelector('.date-selector .selected-date');
	const datesElem = document.querySelector('.date-selector .dates');
	const monthElem = document.querySelector('.date-selector .dates .month .mth');
	const nextMonthElem = document.querySelector('.date-selector .dates .month .next-month');
	const prevMonthElem = document.querySelector('.date-selector .dates .month .previous-month');
	const daysElem = document.querySelector('.date-selector .dates .days');

	const dateSearch = document.querySelector('.date-selector .dates .date-search .date-input');
	const dateSearchBtn = document.querySelector('.date-selector .dates .date-search .button-search');

	//Instantiate the datePicker Factory function
	let dateSelector = datePicker();
	daysElem.innerHTML = '';
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

	// Logic functions
	const toggleDateSelected = (element) => {
		if (!dateSelector.getElementPath(element.path, 'dates')) {
			datesElem.classList.toggle('active');
		}
	}
	const getDates = (element) => {
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
				selectedDateElem.dataset.value = selectedDate;
				getDates(daysInMonthSelected);
			});
			daysElem.appendChild(dayElem);
		}

	}
	getDates(daysInMonthCurrent);

	const nextMonth = () => {
		month++;
		if (month > 11) {
			month = 0;
			year++;
		}
		let daysInMonthNext = dateSelector.getMonthDayNumber(month, year);
		monthElem.textContent = monthsList[month] + ' ' + year;
		
		selectedDate = new Date(year + '-' + (month + 1) + '-' + (1));
		selectedDateElem.textContent =  dateSelector.getFormatedDate(selectedDate);
		
		getDates(daysInMonthNext);
		
		selectedDateElem.dataset.value = selectedDate;
	}

	const previousMonth = () => {
		month--;
		if (month < 0) {
			month = 11;
			year--;
		}
		let daysInMonthPrev = dateSelector.getMonthDayNumber(month, year);
		monthElem.textContent = monthsList[month] + ' ' + year;
	
		selectedDate = new Date(year + '-' + (month + 1) + '-' + (1));
		selectedDateElem.textContent =  dateSelector.getFormatedDate(selectedDate);
		
		getDates(daysInMonthPrev);
		selectedDateElem.dataset.value = selectedDate;
		
	}

	const searchDate = () => {
		let dateFormatSearch = dateSearch.value.trim();  
		console.log("Search Date", dateFormatSearch );
	}
	dateSelectorElem.addEventListener('click', toggleDateSelected);
	prevMonthElem.addEventListener('click', previousMonth);
	nextMonthElem.addEventListener('click', nextMonth);
	dateSearchBtn.addEventListener('click', searchDate);

});