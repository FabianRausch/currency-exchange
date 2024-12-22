import { CURRENCY_HREF, CURRENCIES } from "../constants";

const handlePathName = (id, name) =>
  `${id.toLowerCase()}-${name.toLowerCase().replace(" ", "-")}`;

export const currenciesMapper = (currencies) =>
  Object.entries(currencies).filter(([value]) => CURRENCIES.includes(value)).map(([key, value]) => {
    return {
      id: key,
      url: `${CURRENCY_HREF}${handlePathName(key, value.name)}`,
      ...value,
    };
  })