import { data } from './../assets/db.json';

const fs = require('fs');

const jsonData = fs.readFileSync({ data });
let loaded = false;

let csvObj;

if (!loaded) {
  csvObj = JSON.parse(jsonData);
  loaded = true;
}

const getFunkos = () => {
  return csvObj;
};

const getFunkoById = (id) => {
  return csvObj.find((funko) => funko.handle === id);
};

const getFunkosByName = (name) => {
  return csvObj.filter((funko) => funko.name.includes(name));
};

const getFunkosBySerie = (serie) => {
  return csvObj.filter((funko) => funko.series.includes(serie));
};

const getFunkosByScaleRange = (min, max) => {
  if (min === undefined) min = 0;
  if (max === undefined) max = 100;
  return csvObj.filter((funko) => funko.scale >= min && funko.scale <= max);
};

const getFunkosByPriceRange = (min, max) => {
  if (min === undefined) min = 0;
  if (max === undefined) max = 10000;
  return csvObj.filter((funko) => funko.price >= min && funko.price <= max);
};

const getSeries = () => {
  console.log(csvObj);
  const set = new Set();
  csvObj.forEach((funko) => {
    funko.series.forEach((serie) => {
      set.add(serie);
    });
  });
  return set;
};

export default { getFunkos, getFunkosByName, getFunkoById, getFunkosBySerie, getFunkosByPriceRange, getFunkosByScaleRange, getSeries };
