const apiKey = 'DrUotxLFBoXXpNInEw9qsNSqiG21xIaI';
let breedArray = ["German Shepherd", "Schnauzer", "Pitbull"]
let searchQuery = breedArray
const QueryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=8&offset=0&lang=en`;
function renderButtons() {
    $("#buttonsDiv").empty();

    for (i = 0; i < breedArray.length; i++) {
        let newButton = $('<button>');
        newButton.addClass('breed');
        newButton.attr('data-name', breedArray[i]);
        newButton.text(breedArray[i]);
        $('#buttonsDiv').append(newButton);
    }
}
$('#add-breed').on('click', function (event) {
    event.preventDefault();
    var breed = $('#breed-input').val().trim();
    breedArray.push(breed);
    renderButtons();
}
);
renderButtons();
$.ajax({
    url: QueryUrl,
    methodf: "GET"
}).then(function (response) {
    console.log(response);
}
);
console.log(breedArray)

