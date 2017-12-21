$('#submitText').on('click', function(){

   // $('#container').empty();

var textEntered = $('#enterText').val();

   $.ajax({
    url: 'https://cryptic-headland-94862.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=bnyxt2x6nya6s3h7fvt52d26&query='+ textEntered
    }).done(function(data) {
    console.log('data', data);
    $('.content').empty();
    for (i = 0; i < data.items.length; i++) {
                
            var p = $("<p class='price'>").text("Price: $" + data.items[i].salePrice);
            
            var description = $("<p class='anything'>").text("" + data.items[i].name);

            var numbReviews = $("<p>").text("" + data.items[i].numReviews);

            var reviewpic = $("<p class='reviews' >").html("<img src="+data.items[i].customerRatingImage+">");

            var itemImg = $("<img class='sweet'>");
 
            itemImg.attr("src", data.items[i].largeImage);
            // Appending the paragraph and image tag to the animalDiv
            //if function incase reviews are unidentified
            if(data.items[i].numReviews == null){
                numbReviews = $("<p>").text("No reviews yet");
                reviewpic = $("<p>").text("Be the first to leave a review");
            }
            //Appending the items on our page
            $('#pics').prepend(p);
            $('#pics').prepend(numbReviews);
            $('#pics').prepend(reviewpic);
            $('#pics').prepend(description);
            $('#pics').prepend(itemImg);
    }

})

   return false;

})

