let inpt = document.querySelector("#inpt");
let submit = document.querySelector(".submit");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let description = document.querySelector(".description");
let weatherPlace = document.querySelector(".weatherPlace");

let tempfor1 = document.querySelector(".temp-for1");
let windfor1 = document.querySelector(".wind-for1");

let tempfor2 = document.querySelector(".temp-for2");
let windfor2 = document.querySelector(".wind-for2");

let tempfor3 = document.querySelector(".temp-for3");
let windfor3 = document.querySelector(".wind-for3");

let url = "https://goweather.herokuapp.com/weather/";

submit.addEventListener("click", async function () {
     try {
          let input = inpt.value;
          let Data = await getData(input);

          weatherPlace.innerText = `Weather of : ${inpt.value}`;
          temp.innerText = Data.data.temperature;
          wind.innerText = Data.data.wind;
          description.innerText = Data.data.description;

          tempfor1.innerText = Data.data.forecast[0].temperature;
          windfor1.innerText = Data.data.forecast[0].wind;

          tempfor2.innerText = Data.data.forecast[1].temperature;
          windfor2.innerText = Data.data.forecast[1].wind;

          tempfor3.innerText = Data.data.forecast[2].temperature;
          windfor3.innerText = Data.data.forecast[2].wind;
     } catch {
          inpt.value = ""; weatherPlace.innerText = "404 Not found";
     }
});

async function getData(input) {
     let res = await axios.get(url + input);
     return res;
}

