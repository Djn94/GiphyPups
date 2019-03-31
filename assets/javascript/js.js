const apiKey = 'DrUotxLFBoXXpNInEw9qsNSqiG21xIaI';
let breedArray = [""]
let searchQuery = breedArray
const QueryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=8&offset=0&lang=en`;
function renderButtons() {
    $("#buttons-view").empty();
    for (i = 0; i < breedArray.length; i++) {
        let newButton = $('</div>');
        newButton.addClass('breed');
        newButton.attr('data-name', breedArray[i]);
        newButton.text(breedArray[i]);
        $('#buttonsDiv').append(newButton);
    }
}
$('#submitButton').on('click', function (event) {
    event.preventDefault();
    let breed = $('#breed-input').val().trim();
    breedArray.push(breed);
    renderButtons();
}
)
renderButtons();
$.ajax({
    url: QueryUrl,
    methodf: "GET"
}).then(function (response) {
    console.log(response);
}
);
console.log(breedArray)