// Función para filtrar por Afiliación
export function filterAffiliation(dataset, selectedAffiliation) {
  if (!selectedAffiliation) {
    return dataset; // Si no se ha seleccionado una afiliación, devuelve toda la data sin cambios
  }

  const filteredData = dataset.filter(item => item.facts.affiliation === selectedAffiliation);
  return filteredData;
}
// Función para ordenar asc y desc A-Z
export function sortData(data, sortBy) {
  const sortedData = [...data];

  if (sortBy === "asc") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "desc") {
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortedData;
}

// Función estadística para la cantidad de resultados filtrados
export const computeStats = (filteredData) => {
  return filteredData.reduce((count, item) => {
    const name = item.name;
    count[name] = (count[name] || 0) + 1;
    return count;
  }, {});
};