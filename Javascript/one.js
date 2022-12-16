import { cardGen as Card } from "./card.js"; 

const button = document.getElementById('btn');
const container = document.getElementById('container'); 

const titleInput = document.getElementById('title-input'); 
const detailsInput = document.getElementById('details-input'); 

button.addEventListener('click', function() { 
    

    const card = Card (titleInput.value,detailsInput.value);
     
    
    container.append(card); 
}); 