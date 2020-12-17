import { ProxyState } from "../AppState.js"
import Pizza from "../Models/Pizza.js"
import { saveState } from "../Utils/LocalStorage.js"

class PizzaService{
deletePizza(id) {
  ProxyState.pizzas = ProxyState.pizzas.filter(p=> p.id != id)
  ProxyState.toppings = ProxyState.toppings.filter(t=> t.pizzaId != id)
}
createPizza(rawPizza) {
  let pizza = new Pizza(rawPizza)

  let pizzas = ProxyState.pizzas
  pizzas.push(pizza)

  ProxyState.pizzas = pizzas
  console.log(ProxyState.pizzas)
}
constructor(){
  console.log("pizza serv construct")
  ProxyState.on("pizzas", saveState)
}

}

export const pizzaService = new PizzaService()