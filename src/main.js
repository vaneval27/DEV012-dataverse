import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterAffiliation } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';

// Sección renderizador tarjetas
const cardsContainer = document.getElementById("root")
cardsContainer.appendChild(renderItems(data));

// Sección filtro
const optionFilter = document.querySelector('[name="affiliation"]');
const clearButton = document.querySelector("#clearBtn"); 
let selectedAffiliation = "";

// Función actualizar filtro
const updateFilter = () => {
  // Filtrar data y renderizar tarjetas de nuevo
  const filteredData = filterAffiliation(data, selectedAffiliation);
  
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(filteredData));

  // actializa estádísticas del filtrado
  const statsElement = document.querySelector("#statsFilter");
  const statsResult = computeStats(filteredData);
  
  const totalCount = Object.values(statsResult).reduce((total, count) => total + count, 0);

  // establece el contenido del HTML
  statsElement.innerHTML = `Total characters: ${totalCount}`;
};

// Evento para cambiar el filtro
optionFilter.addEventListener("change", (event) => {
  selectedAffiliation = event.target.value;
  updateFilter();
});

/// Sección botón de limpiar
clearButton.addEventListener("click", () => {
  selectedAffiliation = "";

  // Reestablece Afiliación
  optionFilter.value = "• Select Affiliation •";
  updateFilter();

  // Reestablece orden
  optionSort.value = "• Select Order •";
  sortBy = ""; // Reset the sorting option
  const sortedData = sortData(data, sortBy);

  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(sortedData));
});
//// Sección ordenar
const optionSort = document.querySelector('[name="sortAZ"]');
let sortBy = "";

// Evento para cambiar el orden
optionSort.addEventListener("change", function (event) {
  sortBy = event.target.value;

  // ordena la data filtrada o la que ya se encuentra por default
  const dataToSort = selectedAffiliation ? filterAffiliation(data, selectedAffiliation) : data;
  const sortedData = sortData(dataToSort, sortBy);

  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(sortedData));
});

//// Sección estadística
const statsElement = document.querySelector("#statsFilter");
const filteredData = filterAffiliation(data, selectedAffiliation);
const statsResult = computeStats(filteredData);

// obtiene total de personajes
const totalCount = Object.values(statsResult).reduce((total, count) => total + count, 0);

// contenido del HTML
statsElement.innerHTML = "Total characters: " + totalCount;

// Evento para limpiar el filtro
clearButton.addEventListener("click", updateFilter);

//console.log(example, renderItems(data), data);
