
export const getFunkosData = () => {
  const storedValue = localStorage.getItem('funko');
  const value = storedValue === null || storedValue === undefined ? [] : JSON.parse(storedValue);
  return value;
};

export const addFunko = (funko, quantity) => {
  const storedValue = localStorage.getItem('funko');
  const value = storedValue === null || storedValue === undefined ? [] : JSON.parse(storedValue);

  let found = value.find((element) => element.id === funko.handle);

  if (found) {
    found.quantity = parseInt(found.quantity) + parseInt(quantity);
  } else {
    found = {
      id: funko.handle,
      quantity: quantity
    };
    value.push(found);
  }

  localStorage.setItem('funko', JSON.stringify(value));
};

export const changeQuantity = (id, newQuantity) => {
  const storedValue = localStorage.getItem('funko');
  const value = storedValue === null || storedValue === undefined ? [] : JSON.parse(storedValue);

  let found = value.find((element) => element.id === id);

  if (found) {
    if (newQuantity === 0) {
      value.splice(value.indexOf(found), 1);
    } else {
      found.quantity = newQuantity;
    }
  } else {
    found = {
      id: id,
      quantity: newQuantity
    };
    value.push(found);
  }

  localStorage.setItem('funko', JSON.stringify(value));
};

export const removeFunko = (id) => {
  changeQuantity(id, 0);
};

export default {
  getFunkosData,
  addFunko,
  changeQuantity,
  removeFunko
};
