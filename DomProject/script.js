class Country {
  countries = [];

  getCountries = async () => {
    let resp = await fetch("https://restcountries.com/v3.1/all");
    this.countries = await resp.json();

    let root = document.getElementById("root");
    console.log(root);
    for (const country of this.countries) {
      // parent Div
      let parentDiv = document.createElement("div");
      parentDiv.className = "col-3 mt-4";

      // card div
      let card = document.createElement("div");
      card.className = "card";

      // img
      let img = document.createElement("img");
      img.className = "card-img-top";
      img.src = country.flags.svg;

      // card body
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      // h5
      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerHTML = country.name.common;

      // append to card body
      cardBody.append(h5);

      // append to card div
      card.append(img);
      card.append(cardBody);

      // append to card
      parentDiv.append(card);

      // append to root
      root.append(parentDiv);
    }
  };
}

let show = new Country();
show.getCountries();
