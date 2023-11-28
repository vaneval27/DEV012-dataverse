import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterAffiliation } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';

// Section: Render cards
const cardsContainer = document.getElementById("root")
cardsContainer.appendChild(renderItems(data));

// Section: Filter
const optionFilter = document.querySelector('[name="affiliation"]');
const clearButton = document.querySelector("#clearBtn"); 
let selectedAffiliation = "";

// Function to update the filter
const updateFilter = () => {
  // Filter the data and re-render the cards
  const filteredData = filterAffiliation(data, selectedAffiliation);
  
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(filteredData));

  // Update the statistic of filtered results
  const statsElement = document.querySelector("#statsFilter");
  const statsResult = computeStats(filteredData);
  
  const totalCount = Object.values(statsResult).reduce((total, count) => total + count, 0);

  // Set the content of the HTML element
  statsElement.innerHTML = `Total characters: ${totalCount}`;
};

// Event for a change in the filter
optionFilter.addEventListener("change", (event) => {
  selectedAffiliation = event.target.value;
  updateFilter();
});

// Section: Clear filter button
clearButton.addEventListener("click", () => {
  selectedAffiliation = "";

  // Reset value for filter
  optionFilter.value = "• Select Affiliation •";
  updateFilter();

  // Reset value for sort
  optionSort.value = "• Select Order •";
  sortBy = ""; // Reset the sorting option
  const sortedData = sortData(data, sortBy);

  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(sortedData));
});
//// Section: Sorting
const optionSort = document.querySelector('[name="sortAZ"]');
let sortBy = "";

// Event for a change in the sort option
optionSort.addEventListener("change", function (event) {
  sortBy = event.target.value;

  // Sort the filtered data if it exists, otherwise sort the original data
  const dataToSort = selectedAffiliation ? filterAffiliation(data, selectedAffiliation) : data;
  const sortedData = sortData(dataToSort, sortBy);

  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(sortedData));
});

//// Section: Statistics
const statsElement = document.querySelector("#statsFilter");
const filteredData = filterAffiliation(data, selectedAffiliation); // Make sure filteredData is defined
const statsResult = computeStats(filteredData);

// Get the total number of characters
const totalCount = Object.values(statsResult).reduce((total, count) => total + count, 0);

// Set the content of the HTML element
statsElement.innerHTML = "Total characters: " + totalCount;

// Section: Event for clearing the filter
clearButton.addEventListener("click", updateFilter);

//console.log(example, renderItems(data), data);
