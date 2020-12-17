import { ProxyState } from "../AppState.js"
import {pizzaService} from "../Services/PizzaService.js"

function _draw(){
  console.log("drawing");
  let template = ""
  ProxyState.pizzas.forEach(p => template += p.Template)
  document.getElementById("pizzas").innerHTML = template
}

export default class PizzaController{
  constructor(){
    console.log("hello from pizza controller")
    ProxyState.on("pizzas", _draw)
    ProxyState.on("toppings", _draw)
    _draw()
  }

  createPizza(){
    window.event.preventDefault()
    console.log("creating pizza");
    let form = window.event.target
    //access the target or form variable to pull values off of the form ids/names then access value.
    // @ts-ignore
    console.log(form.title.value)
    // @ts-ignore
    let rawPizza = {
      // @ts-ignore
      title: form.title.value
    }
    console.log(rawPizza)
    pizzaService.createPizza(rawPizza )
    // @ts-ignore
    form.reset()
    $("#pizzaModal").modal('hide')
  }

  deletePizza(id){
    console.log("deleting pizza", id);
    pizzaService.deletePizza(id)
  }
}