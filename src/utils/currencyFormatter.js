export const currencyFormatter = (price, baseCurrency) => {
  const locale = baseCurrency === 'IDR' ? 'id-ID' : 'en-US';
  const currency = baseCurrency === 'IDR' ? 'IDR' : 'USD';

  var currencyFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  if (isNaN(Number(price))) {
    return '-';
  }

  return currencyFormatter.format(price);
};
