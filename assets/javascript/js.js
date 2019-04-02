const apiKey = 'DrUotxLFBoXXpNInEw9qsNSqiG21xIaI';
let breedArray = ["German Shepherd", "Schnauzer", "Pitbull"]
let searchQuery = breedArray

function renderButtons() {
    $("#buttonsDiv").empty();

    for (i = 0; i < breedArray.length; i++) {
        let newButton = $('<button>');
        newButton.addClass('dogButton');
        newButton.attr('data-name', breedArray[i]);
        newButton.text(breedArray[i]);
        $('#buttonsDiv').append(newButton);
    }
}
renderButtons();
console.log(breedArray)
$('#add-breed').on('click', function (event) {
    event.preventDefault();
    var breedAddition = $('#breed-input').val().trim();
    breedArray.push(breedAddition);
    renderButtons();
}
);

$('.dogButton').on('click', function (event) {
    var breed = $(this).attr("data-name");
    const QueryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${breed}&limit=8&offset=0&lang=en`;
    $.ajax({
        url: QueryUrl,
        methodf: "GET"
    }).then(function (response) {
        var callBack = response.data;
        console.log(response);
        console.log(response.data);
        for (var i = 0; i < callBack.length; i++) {
            var newGif = $('<div>');
            var rating = callBack[i].rating;
            var ratingP = $('<p>').text('Rating: ' + rating);
            var pupGif = $('<img>')
            pupGif.attr('src', callBack[i].images.fixed_height.url);
            newGif.append(ratingP);
            newGif.append(pupGif);
            $('#gifsDiv').prepend(newGif)
        }
    }
    );
})
