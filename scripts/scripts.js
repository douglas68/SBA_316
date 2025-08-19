

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
const recent = [];

function renderRecent() {
  const frag = document.createDocumentFragment();
  recentList.innerHTML = '';
  for (const item of recent) {
    const li = document.createElement('li');
    li.textContent = `"${item.text.slice(0, 50)}${item.text.length > 50 ? '…' : ''}" — ${item.author}`;
    frag.appendChild(li);
  }
  recentList.appendChild(frag);
}

function displayQuote(selected) {
  quoteText.textContent = selected.text;
  quoteAuthor.textContent = `- ${selected.author}`;

  quoteBox.classList.remove('flash');
  void quoteBox.offsetWidth; 
  quoteBox.classList.add('flash');

 
  const tweet = `"${selected.text}" — ${selected.author}`;
  const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
  shareLink.setAttribute('href', url);

  localStorage.setItem('lastQuote', JSON.stringify(selected));

  
  recent.unshift(selected);
  if (recent.length > 3) recent.pop();
  renderRecent();


  const firstChildInBox = quoteBox.firstElementChild; // #quote-text
  const authorSibling = firstChildInBox.nextElementSibling; // #quote-author
  authorSibling.style.opacity = '0.9';
}


newQuoteBtn.addEventListener('click', function() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const selected = quotes[randomIndex];

    displayQuote(selected);

});

//Clear Button
clearBtn.addEventListener('click', () => {
    if(confirm('clear recent quotes?')){
    recent.length = 0;
    renderRecent();
    localStorage.removeItem('lastQuote');
    alert('Recent cleared.'); 
    }
});

//Adding custom quotes
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = quoteInput.value.trim();

//if they do not input a name.. it says someone as the author
    const author = authorInput.value.trim() || 'Someone';
    quotes.push({ text, author });
    quoteInput.value = '';
    authorInput.value = '';


  alert('Quote added!');
});

// lets the user know if the quote exists or did they input enough characters
quoteInput.addEventListener('blur', () => {
  const text = quoteInput.value.trim();
  const isDuplicate = quotes.some(q => q.text.toLowerCase() === text.toLowerCase());
  if (isDuplicate) {
    quoteInput.setCustomValidity('That quote already exists.');
  } else if (text.length > 0 && text.length < 10) {

    //this keeps screaming at me 
    quoteInput.setCustomValidity('Please enter at least 10 characters.');
  } else {
    quoteInput.setCustomValidity('');
  }
  quoteInput.reportValidity();
});

//new quote
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
    newQuoteBtn.click();
  }
});

//Last quote
window.addEventListener('load', () => {
  const saved = localStorage.getItem('lastQuote');
  if (saved) {
    displayQuote(JSON.parse(saved));
  } else {
    newQuoteBtn.click();
  }
});

