// Soal 01
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }
  
  /// EDIT HERE
  person.name = 'Jovito Addo';
  person.favDrinks[1]="tap water";
  person.greeting= function(name){
      return "Hello, " + name;
  }
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));

  // Soal 02

  function getObjectValue(obj,path) {
   }

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)


/// Soal 3

// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
const totalBTC = items.map(i=>(i.btc.sell)-(i.btc.buy));
// console.log(totalBTC);
const totalETH = items.map(i=>(i.eth.sell)-(i.eth.buy));
// console.log(totalETH);
const totalDOGE = items.map(i=>(i.doge.sell)-(i.doge.buy));
// console.log(totalDOGE);

const reduceBtc = totalBTC.reduce(sum,0);
function sum(a,b){
  return a + b;
}
// console.log(reduceBtc);

const reduceEth = totalETH.reduce(sum,0);
function sum(a,b){
  return a + b;
}
// console.log(reduceEth);

const reduceDoge = totalDOGE.reduce(sum,0);
function sum(a,b){
  return a + b;
}
// console.log(reduceDoge);

return "btc: " + reduceBtc + "\n" +"doge: " + reduceDoge + "\n" + "eth: "+ reduceEth   
}

console.log(calculateIncome(items))