(function() {


    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };
    
    var getEl = function (id) {
        return document.getElementById(id);
    }

    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();
}());
