import { sortData } from './dataFunctions.js';
import { filterAffiliation } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// render cards
const cardsContainer = document.getElementById("root")
cardsContainer.appendChild(renderItems(data));



// For filter
const optionFilter = document.querySelector('[name="affiliation"]');
const clearButton = document.getElementById("clearBtn"); // Agregamos la referencia al botón "Clear"
let selectedAffiliation = "";

// Función para limpiar el filtro (mover a dataFunctions.js)
const clearFilter = () => {
  selectedAffiliation = ""; 
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(data));
  
  const statsElement = document.getElementById("stats");
  statsElement.textContent = "Filtered Results: ";
};

optionFilter.addEventListener("change", function (event) {
  selectedAffiliation = event.target.value;

  const filteredData = filterAffiliation(data, selectedAffiliation);
  
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(filteredData));

  const statsElement = document.getElementById("stats");
  const statsResult = statsFilter(filteredData);
  
  let statsText = "Filtered Results: ";
  for (const name in statsResult) {
    statsText += `${name}: ${statsResult[name]}, `;
  }
  
  statsText = statsText.slice(0, -2);

  statsElement.textContent = statsText;
});

// For clear button
clearButton.addEventListener("click", clearFilter);


// For sort
const optionSort = document.querySelector('[name="sortAZ"]');
let sortBy = "";

optionSort.addEventListener("change", function (event) {
  sortBy = event.target.value;

  
  const sortedData = sortData(data, sortBy);
 
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(sortedData));
});

//For statsFilter
const statsElement = document.getElementById("stats");
const statsResult = statsFilter(filteredData);


let statsText = "Filtered Results: ";
for (const name in statsResult) {
  statsText += `${name}: ${statsResult[name]}, `;
}

statsText = statsText.slice(0, -2);

statsElement.textContent = statsText;

// For clear button
clearButton.addEventListener("click", clearFilter);

//console.log(example, renderItems(data), data);
