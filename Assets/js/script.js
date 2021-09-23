
// current time -----------------------------------------------------------------------
var time = moment();
$("#time-display").text(time.format('dddd, MMM Do YYYY, h:mm:ss a'));
// $("#hour").text(time.format('h:mm:ss a'));



$(document).ready(function (){
    $(".save").on("click", function(event){
        // savetask()
        let note = $(this).prev().val()
        let noteHour = $(this).attr("id").split("-")[1]
        localStorage.setItem(noteHour, note)
    })

    function savetask() {
        const value= document.getElementById("task").value
        console.log(value)
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
    $("#18 .textValue").val(localStorage.getItem("17"));

    // timeTracker ();

})

function currentTime(){
    var time = moment();
    $("#time-display").text(time.format('dddd, MMM Do YYYY, h:mm:ss a'));
    var currentHour = moment().hour();

    $(".timeBlock").each(function() {

            var checkHour = $(this).attr("id");
            console.log(checkHour)
            console.log(currentHour)
            checkHour = parseInt (checkHour);
            if (checkHour < currentHour) {
                
            // if > currentHour, text area is grey
                $(this).addClass ("past");
            // removeClass ensures there are no conflicts
                $(this).removeClass("present");
                $(this).removeClass("future");
                console.log($(this))
            } else if (checkHour === currentHour) {
            // 
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
