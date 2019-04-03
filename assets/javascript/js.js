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

$(document).on('click', '.dogButton', function (event) {
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
            var pupGif = $('<img>').attr('src', callBack[i].images.fixed_height_still.url);
            pupGif.attr('dataStatic', callBack[i].images.fixed_height_still.url);
            pupGif.attr('dataAnimate', callBack[i].images.fixed_height.url);
            pupGif.attr('data-state', 'still')
            pupGif.addClass('gifPics')
            newGif.append(ratingP);
            newGif.append(pupGif);
            $('#gifsDiv').prepend(newGif)

            $(".gifPics").on("click", function () {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("dataanimate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("dataStatic"));
                    $(this).attr("data-state", "still");
                }
            });
        }

    });
});