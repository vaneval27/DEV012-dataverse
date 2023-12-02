export const renderItems = (data) => {
  console.log(data);

  const ul = document.createElement("ul");
  ul.classList.add("character");

  data.forEach((item) => {
    ul.innerHTML += `<li itemscope itemtype="card" class="cards">
      <div class="cardContent">
        <dl itemscope itemtype="StarWarsCharacters">
          <strong><dt></dt><dd itemprop="name">${item.name}</dd></strong>
          <img src="${item.imageUrl}" alt="img">
          <span><dt></dt><dd itemprop="occupation">${item.facts.occupation}</dd></span>
          <dt>Affiliation:</dt><dd itemprop="affiliation">${item.facts.affiliation}</dd>
          <p><dt>Description:</dt><dd itemprop="description">${item.description}</dd></p>
        </dl>     
      </div>
    </li>`;
  });

  return ul;
};
