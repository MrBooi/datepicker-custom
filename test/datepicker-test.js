"use scrict";

describe('The Date Picker functionality Unit Test Cases', function() 
{
    it('It should return a boolean value (true) if the year is a leap year ',
    function() {
      let dateSelector = datePicker();
      assert.equal(dateSelector.getLeapYear(2020),true);
     });

     it('It should return a boolean value (false) if the year is not a leap year ',
     function() {
       let dateSelector = datePicker();
       assert.equal(dateSelector.getLeapYear(2019),false);
      });
      it('It should return 29 days for the month of February given a Leap year',
     function() {
       let dateSelector = datePicker();
       assert.equal(dateSelector.getMonthDayNumber(1,2020),'29');
      });
      it('It should return 28 days for the month of February given a Leap year',
     function() {
       let dateSelector = datePicker();
       assert.equal(dateSelector.getMonthDayNumber(1,2019),'28');
      });

});