const apiKey = 'DrUotxLFBoXXpNInEw9qsNSqiG21xIaI';
let breedArray = ["German Shepherd", "Pitbull", "Collie", "Doberman", "King Charles Spaniel", "corgi"]
let searchQuery = breedArray
let Limit = prompt('How many gifs would you like?');
const QueryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${Limit}&offset=0&lang=en`;
function renderButtons() {
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
    let breed = ('#breedInput').val().trim(); //make a breedinput
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