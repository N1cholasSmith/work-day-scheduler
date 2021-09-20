
var myModal = new bootstrap.Modal(document.getElementById('task-modal'))

var myInput = document.getElementById('task-input')

$("li").on('click', function(event){
    console.log("mymodal")
    myModal.show()

});

$("#close").on("click", function(event){
    myModal.hide()
});

$("#save").on("click", function(event){

})
addEventListener.savechanges.on('hide')