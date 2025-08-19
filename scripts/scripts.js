

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.querySelector('#new-quote');
const quoteBox = document.getElementById('quote-box');
const recentList = document.getElementById('recent-list');
const shareLink = document.getElementById('share-link');
const clearBtn = document.getElementById('clear-recent');
const addForm = document.getElementById('add-form');
const quoteInput = document.getElementById('quote-input');
const authorInput = document.getElementById('author-input');


const quotes =[
    {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore optio voluptatibus nobis ut culpa in architecto. Itaque, dolores ullam! Beatae porro, reprehenderit corporis nisi accusantium saepe sapiente dicta voluptate?", author: "Someone"},
    {text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat quae provident totam debitis amet ex labore aspernatur ipsum dolore eaque facere quidem reprehenderit, ratione ipsam culpa corporis quam ullam!", author: "Something"},
    {text:"Moew Moew", author: "A Cat"},
    {text:"Bark Bark, Ruff Ruff", author: "A Dog"},
    {text:"Happy Monday!For all those wanting more practice and understanding of JS! This weeks lesson is for you!! ", author: "Dylan"},
    {text:":partyparrot: Office hours will start at 5pm. Join Here at 5pm", author: "Constance"},
    {text:"Life is a journey, not a destination.", author: "A person"},
    {text:"I love blue cheese!", author: "Noone"}
];

//store the recent quotes
const recent[];

// function renderRecent() {
//   const frag = document.createDocumentFragment();
//   recentList.innerHTML = '';
//   for (const item of recent) {
//     const li = document.createElement('li');
//     li.textContent = `"${item.text.slice(0, 50)}${item.text.length > 50 ? '…' : ''}" — ${item.author}`;
//     frag.appendChild(li);
//   }
//   recentList.appendChild(frag);
// }

newQuoteBtn.addEventListener('click', function() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const selected = quotes[randomIndex];

    quoteText.textContent = selected.text;
    quoteAuthor.textContent = `- ${selected.author}`;

});