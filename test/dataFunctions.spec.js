import { filterAffiliation, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('filterAffiliation', () => {
  it ('la data se filtra por afiliación', () => {
    const characters = filterAffiliation(fakeData, "Galactic Empire");
    expect(characters.length).toBe(1);
  });
});

describe('filterAffiliation', () => {
  it ('la data se filtra por afiliación', () => {
    const characters = filterAffiliation(fakeData, "Rebel Alliance");
    expect(characters.length).toBe(3);
  });
});


describe('sortData', () => {

  it('retorna el array ordenado ascendentemente de acuerdo a la propiedad name', () => {
    const unsortedData = [
      {name: "Han Solo"},
      {name: "Ashoka Tano"},
      {name: "Princess Leia Organa"},
    ]
    
    const sortedData = [
      {name: "Ashoka Tano"},
      {name: "Han Solo"},
      {name: "Princess Leia Organa"},
    ]

    const result = sortData (unsortedData)

    expect(result).toEqual(sortedData);
  });
});

describe('computeStats', () => {
  it('debería devolver estadísticas correctas', () => {
    const filteredData = filterAffiliation(fakeData, "Rebel Alliance");
    const statsResult = computeStats(filteredData);

    expect(statsResult['Luke Skywalker']).toBe(1);
    expect(statsResult['Princess Leia Organa']).toBe(1);
    expect(statsResult['Han Solo']).toBe(1);
  });
});

