//Below will render the list of images and names for the activities page. 
$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

var rendered = Mustache.render(template,{
    activities:[
        {img:"churchimages/cubbies.png",
        age: "Age: 3-5"},
        {img:"churchimages/sparks.png",
        age:"Age: 5-8"},
        {img:"churchimages/truth-training.jpg",
        age: "Age: 9-12"},
        {img: "churchimages/teengroup.jpg",
        age: "Age: 13-18"},
        {img: "churchimages/collegegroup.png",
        age:"College Students"}
    ]

});

    $("#clubs").html(rendered);

});

//Form validation function to check that all required fields have been filled out by the user. 

$(function() {
    $("form[name='contactus']").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phone: true
        }
      },
      messages: {
        name: "Please enter your name!",
        email: "Please enter a valid email address!",
        phone: "Please enter a valid phone number!"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });