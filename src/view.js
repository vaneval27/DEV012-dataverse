export const renderItems = (data) => {
  console.log(data)
  const root = document.getElementById("root");

  const ul = document.createElement("ul");
  root.appendChild(ul);
  ul.classList.add("character");
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += `<li itemscope itemtype= "card" class="cards">
    
    <div class="textCard">
     <span><dt></dt><dd itemprop = "name">${data[i].name}</dd></span>
     <img src="${data[i].imageUrl}" alt="img">
     <span><dt></dt><dd itemprop = "occupation">${data[i].facts.occupation}</dd></span>
     <span><dt>Affiliation: </dt><dd itemprop = "affiliation">${data[i].facts.affiliation}</dd></span>
     <span><dt>Description: </dt><dd itemprop = "description">${data[i].description}</dd></span>      
  </li> `;
  }
  return ul;
};

