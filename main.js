let selector = document.getElementById("firstCountry")
let selector2 = document.getElementById("secondCountry");
let input = document.getElementById("input")
let output = document.getElementById("dataContainer")
let convertor = `https://openexchangerates.org/api/latest.json?app_id=08d79f1d66724417a016c55ee0cb33ee&base=USD`;


let addCountries = function(selector) {
    for (let currency in currencies) {
      let option = document.createElement("option");
      option.setAttribute("value", currencies[currency]);
      option.innerText = currencies[currency];
      selector.append(option);
    }
}
addCountries(selector2);


let fetchData = function() {
    fetch (convertor,{
       method: "GET",
       headers: { 'Content-type': 'application.json'}
    }
    )
    .then(r => r.json())
    .then((data) => {
        console.log(output.value)
        let country = selector2.value;
        console.log(data.rates[country])
        let exchange = data.rates[country] * input.value;
        output.append(exchange)
    })
}

//fetchData()

