"use strict";
$(function() {
    $.getJSON('./assets/data/dogs.json', function(data) { //Get json object in JS file
        console.log('success');
        $.each(data.dogs, function(i, dog) {
            if (i < 6) {
                $('<img />').attr('src', data.dogs[i].image).appendTo("#paa-dogs-col-1").attr('alt', data.dogs[i].source); //Add image in the div tag and add alt text for image in the div tag
                $('#paa-dogs-col-1').append('<p class="text-center paa-text-breed"><b>' + "Breed: " + '</b>' + this.breed + "  " + ", " + "  " + '<b>' + "Age: " + '</b>' + this.age + '</p>'); //Add breed and age in the div tag
            }
            if (i >= 6) {
                $('<img />').attr('src', data.dogs[i].image).appendTo("#paa-dogs-col-2").attr('alt', data.dogs[i].source);
                $('#paa-dogs-col-2').append('<p class="text-center paa-text-breed"><b>' + "Breed: " + '</b>' + this.breed + "  " + ", " + "  " + '<b>' + "Age: " + '</b>' + this.age + '</p>');
            }
            $('#paa-dogs-col-1 img').addClass('paa-dog-image'); //Add class to the image
            $('#paa-dogs-col-2 img').addClass('paa-dog-image');
            $('.paa-dog-image').attr('data-toggle', 'modal'); //Include modal toggle
            $('.paa-dog-image').attr('data-target', '#myModal'); //Include modal target

            $(".paa-dog-image").on('click', function(event) { //Onclick opens full sized image 
                $('#myModalImg').attr('src', this.src).attr('alt', this.alt);
            });
        });
    });
});

//Include Header file - jQuery
$(function() {
    $('#includedHeader').load("./assets/snippets/header.html");
});

//Include Nav-Bar file - jQuery
$(function() {
    $('#includeNavBar').load("./assets/template/nav.html");
});

//Include Footer file - jQuery
$(function() {
    $('#includedFooter').load("./assets/snippets/footer.html");
});