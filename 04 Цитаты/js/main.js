const Quote = document.getElementById('Quote');

async function getQuote(){

try {
      fetch('https://qapi.vercel.app/api/random')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    console.log("В джейсоне лежит:", jsonData);
    Quote.innerText = jsonData.quote;



  })
  .catch(error => {
    console.error("Ошибка при получении JSON:", error);
  });
    } catch (error) {
        console.error('Наебнулось вообще всё:', error);
    }

}

function copyQuote(){
if (Quote.innerText != null && Quote.innerText != undefined){

    navigator.clipboard.writeText(Quote.innerText);

}
};



