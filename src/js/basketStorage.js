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

export { basketStorage, saveBasket };
