import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// render cards
const cardsContainer = document.getElementById("root")
cardsContainer.appendChild(renderItems(data));

// For filter


// For sort
const optionSort = document.querySelector('[name="sortAZ"]');
let sortBy = "";
optionSort.addEventListener("change", function (event) {
  sortBy = event.target.value;

  sortData
});


//console.log(example, renderItems(data), data);
