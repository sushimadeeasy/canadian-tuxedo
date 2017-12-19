 $('#submitText').on('click', function(){

   // $('#container').empty();

   var textEntered = $('#enterText').val();

   $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=bnyxt2x6nya6s3h7fvt52d26&query='+ textEntered
    }).done(function(data) {
    console.log('data', data);
    $('.content').empty();
    for (i = 0; i < data.items.length; i++) {
        // $('.content').prepend('<div>Name: ' + data.items[i].name + '</div>');
        // $('#pics').prepend("<img src='"+data.items[i].largeImage+"'>");
        // $('#price').prepend('<div>price: ' +data.items[i].salePrice+'</div>')
        var picDiv = $("<div>");
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Price: $" + data.items[i].salePrice);
            // Creating and storing an image tag
            var itemImg = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            itemImg.attr("src", data.items[i].largeImage);
            // Appending the paragraph and image tag to the animalDiv
            $('#pics').prepend(p);
            $('#pics').prepend(itemImg);
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#giphHere").append(picDiv);
    }

})

   return false;

})
