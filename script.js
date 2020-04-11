let quoteText = document.querySelector("#text");
let authorText = document.querySelector("#author");
let newQuoteButton = document.querySelector("#new-quote");
let tweet = document.querySelector("#tweet-quote")

let author = '';
let quote = ''

function newQuote(){
  fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
  .then(res => res.json())
  .then(json => {
    
  author = `- ${json.quote.quoteAuthor}`;
  quote = json.quote.quoteText;
  
   quoteText.innerHTML = quote;
   authorText.innerHTML = author; 
  });
}


newQuoteButton.addEventListener('click', newQuote);



window.onload = newQuote();