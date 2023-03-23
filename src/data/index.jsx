
import db from './../assets/db.json?raw';
let loaded = false;

let csvObj;

if (!loaded) {
  csvObj = JSON.parse(db);
  const set = new Set();
  csvObj.forEach((funko) => {
    funko.handle = funko.handle.replaceAll('/', '_');

    const oldName = funko.handle;

    let i = 0;
    while (set.has(funko.handle)) {
      funko.handle = oldName + '_' + i;
      i++;
    }
    set.add(funko.handle);
  });
  loaded = true;
}

export const getFunkos = () => {
  return csvObj;
};

export const getFunkoById = (id) => {
  return csvObj.find((funko) => funko.handle === id);
};

export const getFunkosByName = (name) => {
  return csvObj.filter((funko) => funko.name.includes(name));
};

export const getFunkosBySerie = (serie) => {
  return csvObj.filter((funko) => funko.series.includes(serie));
};

export const getFunkosByScaleRange = (min, max) => {
  if (min === undefined) min = 0;
  if (max === undefined) max = 100;
  return csvObj.filter((funko) => funko.scale >= min && funko.scale <= max);
};

export const getFunkosByPriceRange = (min, max) => {
  if (min === undefined) min = 0;
  if (max === undefined) max = 10000;
  return csvObj.filter((funko) => funko.price >= min && funko.price <= max);
};

export const getSeries = () => {
  const set = new Set();
  csvObj.forEach((funko) => {
    funko.series.forEach((serie) => {
      set.add(serie);
    });
  });
  return set;
};

export default {
  getFunkos,
  getFunkosByName,
  getFunkoById,
  getFunkosBySerie,
  getFunkosByPriceRange,
  getFunkosByScaleRange,
  getSeries
};
