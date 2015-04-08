$(document).ready(function(){

// collect all the data on the form by programming a custom submit function for the form
$("#multiform").submit(function(e) {
    
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var phonenumber = $("#phonenumber").val();
    var message = $("#message").val();


    var collection = {
        
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            message: message
        }


    // if the firstname input or lastname or email or phone number or no file upload then display a message and do not submit anything
    if($("#firstname").val() == "" || $("#lastname").val() == "" || $("#email").val() == "" || $("#phonenumber").val() == "")
        $("#multi-msg").html("There are mandatory field(s) that you have missed out -- Please enter");
    else {

      // console.log(collection);

    $.ajax({
        method: "POST",
        url: "process.php",
        data: collection,

            success:function(data, textStatus, jqXHR) 
            {
       
                $("#multi-msg").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) 
            {
                //if fails  
            }
        });
        
      }

   return false;

  });

});