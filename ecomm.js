// When search button is clicked do this...
$('#submitText').on('click', function(){
    // $('#container').empty();
   
   // Creating variables to store urls and input from search
   // Variable to pull input from search bar
   var textEntered = $('#enterText').val();
   
   // Variable to pull results from Walmart API
   var urlWalmart = 'https://cryptic-headland-94862.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=bnyxt2x6nya6s3h7fvt52d26&query=';
   
   // Variable to pull results from Ebay API
   var urlEbay = "https://cryptic-headland-94862.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1";
    urlEbay += "?OPERATION-NAME=findItemsByKeywords";
    urlEbay += "&SERVICE-VERSION=1.0.0";
    urlEbay += "&SECURITY-APPNAME=SushantS-canadian-PRD-8132041a0-dac71dfb";
    urlEbay += "&GLOBAL-ID=EBAY-US";
    urlEbay += "&RESPONSE-DATA-FORMAT=JSON";
    urlEbay += "&callback=_cb_findItemsByKeywords";
    urlEbay += "&REST-PAYLOAD";
    urlEbay += "&keywords=" + textEntered;
    urlEbay += "&paginationInput.entriesPerPage=100";

    
console.log(urlEbay);

    $.ajax({
    url: urlWalmart + textEntered
    }).done(function(data) {
    console.log('data', data);
    $('.content').empty();
    for (i = 0; i < data.items.length; i++) {
        // $('.content').prepend('<div>Name: ' + data.items[i].name + '</div>');
        // $('#pics').prepend("<img src='"+data.items[i].largeImage+"'>");
        // $('#price').prepend('<div>price: ' +data.items[i].salePrice+'</div>')
        var picDiv = $("<div>");
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("price: $" + data.items[i].salePrice);
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

    // // Parse the response and build an HTML table to display search results
    // function _cb_findItemsByKeywords(root) {
    //     var ebayItems = root.findItemsByKeywordsResponse[0].searchResult.item[0] || [];
   
    //     for (var j = 0; j < ebayItems.length; j++) {
    //       var item = ebayItems[j];
    //       var title = item.title;
    //       var pic = item.galleryURL;
    //       var viewitem = item.viewItemURL;
    //       var price = item.price;
    //       if (null != title && null != viewitem) {
    //         var picDiv = $("<div>");
    //         // Creating a paragraph tag with the result item's rating
    //         var p = $("<p>").text("price: $" + root.price);
    //         // Creating and storing an image tag
    //         var itemImg = $("<img>");
    //         // Setting the src attribute of the image to a property pulled off the result item
    //         itemImg.attr("src", root.pic);
    //         // Appending the paragraph and image tag to the animalDiv
    //         $('#pics').prepend(p);
    //         $('#pics').prepend(itemImg);

    //         // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
    //         // $("#giphHere").append(picDiv);
    //     }
    //   }
    // }
    // $(this).append(_cb_findItemsByKeywords());
  })  



      

//   // Submit the request
// s=document.createElement('script'); // create script element

// s.src= urlEbay;
// document.body.appendChild(s);