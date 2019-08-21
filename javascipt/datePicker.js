
function datePicker() {
    // Returns true or false ... 
    function isLeapYear(year){
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    function formatedDate(dateToFormat){

        let day = dateToFormat.getDate();
        day < 10 ?  day = '0' + day :  day;

        let month =dateToFormat.getMonth() + 1;
        month < 10 ?  month = '0' + month :  month;

        let year = dateToFormat.getFullYear();

        return day + ' / ' + month + ' / ' + year;
    }

    function checkElementPath (path, selector) {
        for (let i = 0; i < path.length; i++) {
            if (path[i].classList && path[i].classList.contains(selector)) {
                return true;
            }
        }
        return false;
    }

    function monthDays(monthIndex, yearToCheck){
        let months = {
          'January':'31', 'February':'28', 'March':'31', 'April':'30', 'May':'31', 'June':'30', 'July':'31', 'August':'31', 'September':'30', 'October':'31', 'November':'30', 'December':'31'
        } 
        let monthsList = Object.keys(months);
            if(isLeapYear(yearToCheck)){
                months["February"] = '29';
                let monthsListLeap = Object.keys(months);
                let choosenMonth = monthsListLeap[monthIndex];
                return months[choosenMonth];
            }
            else{
            let choosenMonth = monthsList[monthIndex];
            return months[choosenMonth];
            }
    }
     return {
        getLeapYear: isLeapYear,
        getFormatedDate : formatedDate,
        getElementPath : checkElementPath,
        getMonthDayNumber :monthDays

    }
}