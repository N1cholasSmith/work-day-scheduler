
// current time & date displayed at the top of the screen -----------------------------------------------------------------------
var time = moment();
$("#time-display").text(time.format('dddd, MMM Do YYYY, h:mm:ss a'));

// Saving the hourly message into local storage
$(document).ready(function (){
    $(".save").on("click", function(event){
        let note = $(this).prev().val()
        let noteHour = $(this).attr("id").split("-")[1]
        localStorage.setItem(noteHour, note)
    })

    function savetask() {
        const value= document.getElementById("task").value
        localStorage.setItem("saveSchedule", value)
    };
    
    // Retrieving the TextValue from localStorage --------------------------------------------------------------

    $("#7 .textValue").val(localStorage.getItem("7"));
    $("#8 .textValue").val(localStorage.getItem("8"));
    $("#9 .textValue").val(localStorage.getItem("9"));
    $("#10 .textValue").val(localStorage.getItem("10"));
    $("#11 .textValue").val(localStorage.getItem("11"));
    $("#12 .textValue").val(localStorage.getItem("12"));
    $("#13 .textValue").val(localStorage.getItem("13"));
    $("#14 .textValue").val(localStorage.getItem("14"));
    $("#15 .textValue").val(localStorage.getItem("15"));
    $("#16 .textValue").val(localStorage.getItem("16"));
    $("#17 .textValue").val(localStorage.getItem("17"));
    $("#18 .textValue").val(localStorage.getItem("18"));
})

// Current time/timetracker which controls color changes on the page IAW the relevant time.
function currentTime(){
    var time = moment();
    $("#time-display").text(time.format('dddd, MMM Do YYYY, h:mm:ss a'));
    var currentHour = moment().hour();

    $(".timeBlock").each(function() {

            var checkHour = $(this).attr("id");
            checkHour = parseInt (checkHour);
            if (checkHour < currentHour) {
                
            // if > currentHour, text area is grey
                $(this).addClass ("past");
            // removeClass ensures there are no conflicts
                $(this).removeClass("present");
                $(this).removeClass("future");
                console.log($(this))
            } else if (checkHour === currentHour) {
           
                $(this).removeClass ("past");
                $(this).addClass("present");
                $(this).removeClass("future");

            } else {
                $(this).removeClass ("past");
                $(this).removeClass("present");
                $(this).addClass("future");
        };      
    })
}
    setInterval(currentTime,1000);
