let currencyData;
let multiply;
let RUBbase;
let USDbase;
let EURbase;



const RUB = document.getElementById("RUB");
const EUR = document.getElementById("EUR");
const USD = document.getElementById("USD");

async function getUSD(){

try {
      fetch('https://v6.exchangerate-api.com/v6/304fafec5dd521e8f6767e26/latest/USD')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    console.log("JSON данные:", jsonData);

        console.log(jsonData.conversion_rates.USD);
        console.log(jsonData.conversion_rates.RUB);
        console.log(jsonData.conversion_rates.EUR);

        RUB.innerText = "RUB: " + jsonData.conversion_rates.RUB;
        EUR.innerText = "EUR: " + jsonData.conversion_rates.EUR;
        USD.innerText = "USD: " + jsonData.conversion_rates.USD;

        RUBbase = RUB.innerText.replace("RUB: ", "");
        USDbase = USD.innerText.replace("USD: ", "");
        EURbase = EUR.innerText.replace("EUR: ", "");


  })
  .catch(error => {
    console.error("Ошибка при получении JSON:", error);
  });
    } catch (error) {
        console.error('Наебнулось вообще всё:', error);
    }

}


async function getRUB(){

try {
      fetch('https://v6.exchangerate-api.com/v6/304fafec5dd521e8f6767e26/latest/RUB')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    console.log("JSON данные:", jsonData);

        console.log(jsonData.conversion_rates.USD);
        console.log(jsonData.conversion_rates.RUB);
        console.log(jsonData.conversion_rates.EUR);

        RUB.innerText = "RUB: " + jsonData.conversion_rates.RUB;
        EUR.innerText = "EUR: " + jsonData.conversion_rates.EUR;
        USD.innerText = "USD: " + jsonData.conversion_rates.USD;

        RUBbase = RUB.innerText.replace("RUB: ", "");
        USDbase = USD.innerText.replace("USD: ", "");
        EURbase = EUR.innerText.replace("EUR: ", "");


  })
  .catch(error => {
    console.error("Ошибка при получении JSON:", error);
  });
    } catch (error) {
        console.error('Наебнулось вообще всё:', error);
    }

}


async function getEUR(){

try {
      fetch('https://v6.exchangerate-api.com/v6/304fafec5dd521e8f6767e26/latest/EUR')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    console.log("JSON данные:", jsonData);

        console.log(jsonData.conversion_rates.USD);
        console.log(jsonData.conversion_rates.RUB);
        console.log(jsonData.conversion_rates.EUR);

        RUB.innerText = "RUB: " + jsonData.conversion_rates.RUB;
        EUR.innerText = "EUR: " + jsonData.conversion_rates.EUR;
        USD.innerText = "USD: " + jsonData.conversion_rates.USD;

        RUBbase = RUB.innerText.replace("RUB: ", "");
        USDbase = USD.innerText.replace("USD: ", "");
        EURbase = EUR.innerText.replace("EUR: ", "");


  })
  .catch(error => {
    console.error("Ошибка при получении JSON:", error);
  });
    } catch (error) {
        console.error('Наебнулось вообще всё:', error);
    }

}

const multiplyText = document.getElementById('multiply');
multiplyText.addEventListener('input', () => {

multiply = document.getElementById("multiply").value;


RUB.innerText = "RUB: " + RUBbase * multiply;
EUR.innerText = "EUR: " + EURbase * multiply;
USD.innerText = "USD: " + USDbase * multiply;

}
);