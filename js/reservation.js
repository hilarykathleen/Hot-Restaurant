$(".submit").on("click", function(){
// store info
        var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };
        console.log(newReservation);
// call back true or false
    var currentURL = window.location.origin;
    $.post(currentURL + "/api/new", newReservation,
    function(data){
// succesfully reserved a table
        if(data == true){
            alert("Booking succesful, looking forward towards your vist!")
        }
// added to the waiting list
        if(data == false){
            alert("We are currently booked, you will be added to the waiting list")
        }
// Clear 
        $('#reserve_name').val("");
        $('#reserve_phone').val("");
        $('#reserve_email').val("");
        $('#reserve_uniqueID').val("");
    });
return false;
});