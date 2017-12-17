 $('#submit').on('click', function(){

    $('#container').empty();

    var textEntered = $('#enterText').val();

    $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=bnyxt2x6nya6s3h7fvt52d26&query='+ textEntered
    }).done(function(data) {
    console.log('data', data);
    $('search-query').empty();
    for (i = 0; i < data.items.length; i++) {
        $('search-query').append('<div>Name: ' + data.items[i].name + '</div>');
        $('#pics-appear-here').prepend("<img src='"+data.items[i].largeImage+"'>");
    }

})

    return false;

})

