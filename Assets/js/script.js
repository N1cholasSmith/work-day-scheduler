
// current time -----------------------------------------------------------------------
var time = moment();
$("#time-display").text(time.format('dddd, MMM Do YYYY, h:mm:ss a'));
// $("#hour").text(time.format('h:mm:ss a'));

// time 
// setInterval(function (){
//     currentTime();
// },1000);

$(document).ready(function (){
    $("#save").on("click", function(event){
        savetask()
        console.log("savetask + hidemodal")
    })


    function savetask() {
        var timeSelected = $(this).parent().attr("id");
        var value = $(this).siblings(".textValue").val();
        localStorage.setItem(timeSelected, ($(this).siblings(".textValue").val()));
    };

    // time tracker -----------------------------------------------------------------------

    function timeTracker() {

        var currentHour = moment().hour();

        $(".timeBlock").each(function() {

                var checkHour = $(this).parent().attr("id");

                checkHour = parseInt (checkHour); 
                if (checkHour < currentHour) {
                // if > currentHour, text area is grey
                    $(this).siblings().addClass ("past");
                // removeClass ensures there are no conflicts
                    $(this).siblings().removeClass("present");
                    $(this).siblings().removeClass("future");
                } else if (checkHour === currentHour) {
                // 
                    $(this).siblings().addClass ("past");
                    $(this).siblings().removeClass("present");
                    $(this).siblings().removeClass("future");
                } else {
                    $(this).siblings().addClass ("past");
                    $(this).siblings().removeClass("present");
                    $(this).siblings().removeClass("future");
            };      
        
        })

    };


    // modul ---------------------------------------------------------------------------------
    // var myModal = new bootstrap.Modal(document.getElementById('task-modal'))
    // var myInput = document.getElementById('task-input')

    // $("li").on('click', function(event){
    // console.log("mymodal")
    // myModal.show()

    // });

    // $("#close").on("click", function(event){
    // myModal.hide()
    // });

    // Saving the Task ----------------------------------------------------------------------------------------------



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

    timeTracker ();

})