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
export const filterNow = (sales, day) => {
  const date = day ? new Date(day) : new Date();
  day && date.setDate(date.getDate() + 1);
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

export const filterEstNow = (sales, day) => {
  const date = day ? new Date(day) : new Date();
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

export const filterChart = (sales, numberDay) => {
  const date = new Date();
  const salesfilter =
    sales &&
    sales.filter(
      (sale) =>
        new Date(sale.dateOfSale).getDate() === numberDay &&
        new Date(sale.dateOfSale).getMonth() === date.getMonth() &&
        new Date(sale.dateOfSale).getFullYear() === date.getFullYear()
    );
  return salesfilter;
};

export const filterEstChart = (sales, numberDay) => {
  const date = new Date();
  const salesfilter =
    sales &&
    sales.filter(
      (sale) =>
        new Date(sale.date).getDate() === numberDay &&
        new Date(sale.date).getMonth() === date.getMonth() &&
        new Date(sale.date).getFullYear() === date.getFullYear()
    );
  return salesfilter;
};

export const returnMonth = (m) => {
  switch (m) {
    case 1:
      return "Enero";
    case 2:
      return "Febrero";
    case 3:
      return "Marzo";
    case 4:
      return "Abril";
    case 5:
      return "Mayo";
    case 6:
      return "Junio";
    case 7:
      return "Julio";
    case 8:
      return "Agosto";
    case 9:
      return "Septiembre";
    case 10:
      return "Octubre";
    case 11:
      return "Noviembre";
    case 12:
      return "Diciembre";
    default:
      break;
  }
};
