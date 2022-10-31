
var rawCharArray= [];
var sortedCharArray= [];


/** Anda*/
function fetchSet(character){
  try{
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${character}`)
        .then(res => res.json())
        .then(data => {toArray(data)});

  }
  catch(error){console.error(error)} 
}

function toArray(array){
  for (var i = 0; i < 50; i++){
    rawCharArray.push(array[i]);
  }
  console.log(rawCharArray);
}


/**Prueba */

const nav = document.getElementById('nav');
const content = document.getElementById('content');
let pageIndex = 0;
let itemsPerPage = 6;

function loadItems() {
    content.innerHTML = "";
    for (let i=pageIndex*itemsPerPage; i<(pageIndex*itemsPerPage)+itemsPerPage; i++) {
        
        const item = document.createElement('div');
        item.innerHTML = `
          <div class="box">
            <img class="imgbox" src=${rawCharArray[i].image}></div>
            <div class="name">${rawCharArray[i].character}</div>
            <div class="quote">${rawCharArray[i].quote}</div>
          </div>
        `;
        console.log("trate")
        content.append(item);
    }
    loadPageNav();
}
function loadPageNav() {
    nav.innerHTML = "";
    for (let i=0; i<(rawCharArray.length/itemsPerPage); i++) {
        
        const span = document.createElement('span');
        span.innerHTML = i+1;
        span.addEventListener('click', (e) => {
            pageIndex = e.target.innerHTML-1;
            loadItems();
        });
        if (i === pageIndex) {
            span.style.fontSize = "2rem";
        }
        nav.append(span);
    }
}

/*const cards = document.querySelector('#card');

const fragment = document.createDocumentFragment();*/

/*rawCharArray.forEach(item=>{
  const card = document.createElement('div');
  card.classList.add('quote-block');
        
  const portraitContainer= document.createElement('div');
  portraitContainer.classList.add('img-container');

  const portrait = document.createElement('img');
  portrait.src=item.image;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = item.character;

  const quote = document.createElement('p');
  quote.classList.add('quote');
  quote.textContent = item.quote;

  portraitContainer.appendChild(portrait);
  card.appendChild(portraitContainer);
  card.appendChild(name);
  card.appendChild(quote);
  quoteContainer.appendChild(card);
})*/
function exe(){
  try{
    fetchSet('')
      .then (loadItems())
  }catch(error){console.error(error)} 
  ;
}

exe();



/*let fragment = ''
rawCharArray.forEach(item => {
  fragment+= ` 
    <div class="box">
      <img class="imgbox" src=${item.image}></div>
      <div class="name">${item.character}</div>
      <div class="quote">${item.quote}</div>
    </div>`
   
})*/







  