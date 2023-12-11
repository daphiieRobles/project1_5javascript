$(document).ready(function() {
    $("#name").focus();
   $.validator.addMethod("noSpace", function(value, element){
    return value == '' || value.trim().length != 0
   }, "Spaces are not allowed");
   },
    $("#reservation_form").validate({
        rules: {
           
            name: {
                required: true,
               minlength: 3,
               noSpace: true
            },
            email: {
                required: true,
                email: true,
                noSpace: true
            },
            phone: {
                required: true,
                 number: true,
                minlength: 9,
                maxlength: 9,
                noSpace: true
                
            },
            
            comments: {
                required: true,
                noSpace: true
            },
            themes: {
                required: true,
                noSpace: true

            },
            country: {
                required: true,
                noSpace: true
            }
            
        },
        messages: {

            name: {
                required: "Name must be at least 3 letters long "
            
            },
            email: {
                required: "Please enter an email",
                email: "Please enter a valid email"
            },
            phone: {
                required: "Please enter a valid phone number",
                maxlength: "No more than 9 digits"
        },
        
        comments:{
            required: "Please leave a comment"
        },
        themes:{
            required: "Please add a topic"
        }

        },
        submitHandler: function(form) {
            form.submit();
        }
    })
);