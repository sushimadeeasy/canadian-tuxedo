
$('#submitText').on('click', function(){

    // $('#container').empty();

    var textEntered = $('#enterText').val();

    $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=bnyxt2x6nya6s3h7fvt52d26&query='+ textEntered
    }).done(function(data) {
    console.log('data', data);
    $('.content').empty();
    for (i = 0; i < data.items.length; i++) {
        $('.content').prepend('<div>Name: ' + data.items[i].name + '</div>');
        $('#pics').prepend("<img src='"+data.items[i].largeImage+"'>");
        $('#price').prepend('<div>price: ' +data.items[i].salePrice+'</div>')
    }

})

    return false;

})


$('#specialButton').on('click', function(){

    $('#container').empty();

    var textEntered = $('#specialText').val();

    $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/paginated/items?category=5438&specialOffer=rollback&apiKey=bnyxt2x6nya6s3h7fvt52d26&format=json'
    }).done(function(data) {
    console.log('data', data);
    $('#content1').empty();
    for (i = 0; i < data.items.length; i++) {
        // $('.content').append('<div>Name: ' + data.items[i].name + '</div>');
        $('#pics1').prepend("<img src='"+data.items[i].largeImage+"'>");
    }

});

    return false;

})