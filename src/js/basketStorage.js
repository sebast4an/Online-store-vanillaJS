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

//First website loading
loadingBasket();

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

export { basketStorage, checkBasketAndAdd };
