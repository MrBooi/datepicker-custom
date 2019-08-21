
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
     return {
        getLeapYear: isLeapYear,
        getFormatedDate : formatedDate,
        getElementPath : checkElementPath

    }
}