import { ProxyState } from "../AppState.js";
import Topping from "../Models/Topping.js";
import { saveState } from "../Utils/LocalStorage.js";

class ToppingService{
  delete(toppingId) {
    ProxyState.toppings = ProxyState.toppings.filter(t=> t.id != toppingId)
  }
  createTopping(rawTopping) {
    let toppings = ProxyState.toppings
    toppings.push(new Topping(rawTopping))
    ProxyState.toppings =toppings
    console.log(ProxyState.toppings)
  }
  constructor(){
  console.log("topping service");
  ProxyState.on("toppings", saveState)

  }
}

export const toppingService = new ToppingService()