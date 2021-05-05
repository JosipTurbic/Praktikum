function priceListFormatter(pricelist) {
  res = ""; 
  values = [];
  sorted = pricelist.sort((x, y) => { return x.price - y.price; });
  
  for(const el of sorted) 
      values.push(el.price);

  values = [...new Set(values)];

  for (x in values) {
      res += `${values[x].toFixed(1)} :`;
      sorted.forEach(function (el) {
          if(el.price === values[x]) res += ` ${el.from} do ${el.to}`;
      });
      res+= ` \n`;
  }

  return res;
}

module.exports = priceListFormatter;