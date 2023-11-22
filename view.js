export const renderItems = (data) => {
  console.log(data);

  const ul = document.createElement("ul");
  ul.classList.add("character");
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += `<li itemscope itemtype= "card" class="cards">
    
    <div class="cardContent">
      <dl itemscope itemtype ="StarWarsCharacters">
      <strong><dt></dt><dd itemprop = "name">${data[i].name}</dd></strong>
      <img src="${data[i].imageUrl}" alt="img">
      <span><dt></dt><dd itemprop = "occupation">${data[i].facts.occupation}</dd></span>
      <dt>Affiliation:</dt><dd itemprop = "affiliation">${data[i].facts.affiliation}</dd>
      <p><dt>Description:</dt><dd itemprop = "description">${data[i].description}</dd></p>
      </dl>     
  </li> `;
  }
  return ul;
};
