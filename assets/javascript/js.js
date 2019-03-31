const apiKey = 'DrUotxLFBoXXpNInEw9qsNSqiG21xIaI';
let searchQuery = prompt('enter search query: ');
let Limit = prompt('How many gifs would you like?');
let rating = prompt('Would you like to filter by rating?');
const QueryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${Limit}&offset=0&rating=${rating}&lang=en`;
$.ajax({
    url: QueryUrl,
    methodf: "GET"
}).then(function (response) {
    console.log(response);
}
);