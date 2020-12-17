import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";
import Topping from "../Models/Topping.js";


export function saveState(){
  localStorage.setItem("pizzaData", JSON.stringify({pizzas: ProxyState.pizzas, toppings: ProxyState.toppings}))
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem("pizzaData"))
  if(data){
    console.log(data, "data1")
   ProxyState.pizzas = data.pizzas.map(p => new Pizza(p))

   ProxyState.toppings = data.toppings.map(t=> new Topping(t))
   console.log(ProxyState.toppings, "proxy");
   console.log(data, "data2")

  }

}