let quotes = ["Hakuna Matata", 
"Do or do not. There is no try. - Yoda", 
"You must be the change you wish to see in the world. - Mahatma Gandhi",
"Don’t strive to be a success, but rather to be of value. - Albert Einstein", 
"Life is like a box of chocolates – You never know what you’re going to get. - Forest Gump", 
"Once you’ve accepted your flaws, no one can use them against you. - George R.R. Martin", 
"Stay hungry, stay foolish. - Steve Jobs", 
"You’ll never find a rainbow if you’re looking down. - Charlie Chaplin", 
"The big lesson in life, baby, is never be scared of anyone or anything. - Frank Sinatra", 
"That which does not kill us makes us stronger.- Friedrich Nietzsche"];

let quotesList = document.querySelector(".quotelist")
 
// Vælg et tilfældigt citat
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quotes.forEach(function (quote) {
    console.log(quotes);
    quotesList.innerHTML = `<blockquote>${randomQuote}</blockquote>`;
})



