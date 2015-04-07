// <script type="text/javascript">
$(document).ready(function(){

// collect all the data on the form
$("#multiform").submit(function(e) {
    
    //if the firstname input or lastname or email or phone number or no file upload then display a message and do not submit anything
    if($("#firstname").val() == "" || $("#lastname").val() == "" || $("#email").val() == "" || $("#phonenumber").val() == "" || $("#file").val() == "")
        $("#multi-msg").html("There are mandatory field(s) that you have missed out. <br> Please ensure you have entered the following: first name, last name, email, phone number and uploaded your resume");
    else {



    var formObj = $(this);
    // console.log(formObj);
    var formURL = $("#multiform").attr("action");
    // formObj.attr("action");

if(window.FormData !== undefined)  
    {
        var formData = new FormData(this);
        $.ajax({
            url: formURL, //formURL
            type: 'POST',
            data:  formData,
            mimeType:"multipart/form-data",
            contentType: false,
            cache: false,
            processData:false,
            success: function(data, textStatus, jqXHR)
            {
                    $("#multi-msg").html('<pre><code>'+data+'</code></pre>');
            },
            error: function(jqXHR, textStatus, errorThrown) 
            {
                $("#multi-msg").html('<pre><code class="prettyprint">AJAX Request Failed<br/> textStatus='+textStatus+', errorThrown='+errorThrown+'</code></pre>');
            }           
       });
        e.preventDefault();
       $(this).unbind(e);
        // e.unbind();
   }
        
    }
   return false;
});
// $("#multi-post").click(function()
//     {
//     //sending form from here
//     $("#multiform").submit();
// });

});

// add a clear function

// </script>