 $('#submitText').on('click', function(){
    // Get input from value entered and submitted on search bar
       var textEntered = $('#enterText').val();
      
    // Construct the request for Walmart
    // Set url variable for Walmart
    var urlWalmart = 'https://cryptic-headland-94862.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=bnyxt2x6nya6s3h7fvt52d26&query=';

    // Starts Ajax call to Walmart to pull data
    $.ajax({
    url: 'https://cryptic-headland-94862.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=bnyxt2x6nya6s3h7fvt52d26&query='+ textEntered
    }).done(function(data) {
    console.log('data', data);
    $('.content').empty();
    for (i = 0; i < data.items.length; i++) {
                
            var p = $("<p>").text("Price: $" + data.items[i].salePrice);
            
            var description = $("<p class='anything'>").text("" + data.items[i].name);

            var numbReviews = $("<p class='reviews'>").text("" + data.items[i].numReviews);

            var reviewpic = $("<p>").html("<img src="+data.items[i].customerRatingImage+">");

            var itemImg = $("<img>");
 
            itemImg.attr("src", data.items[i].largeImage);
            
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


    // Construct the request for Ebay
    // Set url variable for Ebay
        var urlEbay = 'https://cryptic-headland-94862.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=SushantS-canadian-PRD-8132041a0-dac71dfb&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&keywords=' + textEntered + '&paginationInput.entriesPerPage=100'; 
    // Starts Ajaxx call to Ebay to pull results
        $.ajax({
            url: urlEbay, 
            success: function(result){
        console.log(result)
        //Select the item from JSON and set it to variable
        var results = result.findItemsByKeywordsResponse.searchResult.item || [];
            for (var i = 0; i < results.length; i++) {
                var item = results[i].item;
                var title = item.title;
                var pic = item.galleryURL;
                var viewitem = item.viewItemURL;
                var price = item.sellingStatus.currentPrice._value_;

                var picDiv = $("<div");
                var p = $("<p>").text("Price: $" + price); 
                var description = $("<p class='anything'>").text(title);
                var itemImg = $("<img>");
                itemImg.attr("src", pic);
                
                if (null != title && null != viewitem) {
                    //Appending the items on our page
                    $('#pics').prepend(p);
                    $('#pics').prepend(description);
                    $('#pics').prepend(itemImg);
                    }
                }
            }
        })

           return false;

})