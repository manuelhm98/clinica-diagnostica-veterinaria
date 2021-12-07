export const data = [
  {
    image: "https://wallpapercave.com/wp/wp2544022.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2544122.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2544043.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2544051.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2544086.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2544107.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2507512.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2544148.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
  {
    image: "https://wallpapercave.com/wp/wp2446992.jpg",
    caption: "Clinica de diagnostico veterinario",
  },
];

export const filterDates = (
  initialDate = Date.now(),
  finalDate = Date.now(),
  sales
) => {
  const salesfilter =
    sales &&
    initialDate &&
    finalDate &&
    sales.filter(
      (sale) =>
        new Date(sale.dateOfSale).valueOf() >=
          new Date(initialDate).valueOf() &&
        new Date(sale.dateOfSale).valueOf() <= new Date(finalDate).valueOf()
    );
  return salesfilter;
};

export const filterEst = (
  initialDate = Date.now(),
  finalDate = Date.now(),
  sales
) => {
  const salesfilter =
    sales &&
    initialDate &&
    finalDate &&
    sales.filter(
      (sale) =>
        new Date(sale.date).valueOf() >= new Date(initialDate).valueOf() &&
        new Date(sale.date).valueOf() <= new Date(finalDate).valueOf()
    );
  return salesfilter;
};
export const filterNow = (sales) => {
  const date = new Date();
  const salesfilter =
    sales &&
    sales.filter(
      (sale) =>
        new Date(sale.dateOfSale).getDate() === date.getDate() &&
        new Date(sale.dateOfSale).getMonth() === date.getMonth() &&
        new Date(sale.dateOfSale).getFullYear() === date.getFullYear()
    );
  return salesfilter;
};

export const filterEstNow = (sales) => {
  const date = new Date();
  const salesfilter =
    sales &&
    sales.filter(
      (sale) =>
        new Date(sale.date).getDate() === date.getDate() &&
        new Date(sale.date).getMonth() === date.getMonth() &&
        new Date(sale.date).getFullYear() === date.getFullYear()
    );
  return salesfilter;
};
