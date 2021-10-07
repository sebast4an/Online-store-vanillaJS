const basketStorage = {};

const saveBasket = () => localStorage.setItem('basketStorage', JSON.stringify(basketStorage));

const loadingBasket = () => {
  const load = JSON.parse(localStorage.getItem('basketStorage'));

  if (load != null || load != undefined) {
    for (const keys of Object.keys(load)) {
      basketStorage[keys] = {
        pieces: load[keys]['pieces'],
      };
    }
  }
  console.log(basketStorage);
};

const checkBasketAndAdd = id => {
  if (Object.prototype.hasOwnProperty.call(basketStorage, `product-${id}`)) {
    basketStorage[`product-${id}`] = {
      pieces: `${Number(basketStorage[`product-${id}`].pieces) + 1}`,
    };
  } else {
    basketStorage[`product-${id}`] = {
      pieces: '1',
    };
  }
  saveBasket();
  console.log(basketStorage);
};

const clearBasket = () => localStorage.clear();

//First website loading
loadingBasket();

export { basketStorage, clearBasket, checkBasketAndAdd };
