//import dataset from "./data/dataset";

// Función para filtrar por Afiliación
export function filterAfilliation (dataset) {

  return 'example';
};

// Función para ordenar asc y desc A-Z / Edad / Estatura
export function sortData(data, sortBy) {
  const sortedData = [...data];

  if (sortBy === "asc") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "desc") {
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "ascAge") {
    sortedData.sort((a, b) => a.facts.age - b.facts.age);
  } else if (sortBy === "descAge") {
    sortedData.sort((a, b) => b.facts.age - a.facts.age);
  } else if (sortBy === "ascHeight") {
    sortedData.sort((a, b) => a.facts.height - b.facts.height);
  } else if (sortBy === "descHeight") {
    sortedData.sort((a, b) => b.facts.height - a.facts.height);
  } else {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortedData;
}

// Función estadística para la cantidad de resultados filtrados
export const statsFilter = () => {
  return 
};