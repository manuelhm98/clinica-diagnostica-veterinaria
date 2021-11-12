export function setItemService(service) {
  if (getServices()) {
    const cartsItems = getServices();
    if (service) {
      const filtered = cartsItems.filter((a) => a.id === service.id);
      if (filtered.length === 1) {
        sumItemService(service);
        return;
      }
      const newItem = cartsItems.concat(service);
      localStorage.setItem("service", JSON.stringify(newItem));
      return { newItem };
    }
    return;
  }
  localStorage.setItem("service", JSON.stringify([service]));
}

export function getServices() {
  return JSON.parse(localStorage.getItem("service") || "[]");
}

export function removeServiceItem(item, option) {
  if (item) {
    if (getServices()) {
      const cartsItems = getServices();
      const fnd = cartsItems.find((a) => a.id === item.id);
      const index = cartsItems.indexOf(fnd);
      if (option === "remove" || cartsItems[index].qt <= 1) {
        cartsItems.splice(index, 1);
      } else if (cartsItems[index].qt > 1) {
        cartsItems[index].price =
          cartsItems[index].price -
          cartsItems[index].price / cartsItems[index].qt;
        cartsItems[index].qt--;
      }
      localStorage.setItem("service", JSON.stringify(cartsItems));
    }
  }
}

export function sumItemService(product) {
  const cartsItems = getServices();
  const fnd = cartsItems.find((a) => a.id === product.id);
  const index = cartsItems.indexOf(fnd);
  cartsItems[index].qt++;
  cartsItems[index].total_price =
    cartsItems[index].qt * cartsItems[index].price;
  localStorage.setItem("service", JSON.stringify(cartsItems));
}
export function clearServices() {
  localStorage.removeItem("service");
}
