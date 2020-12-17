import {toppingService} from "../Services/ToppingService.js"

export default class ToppingController{
  constructor(){
    console.log("topping controller");
  }

  createTopping(pizzaId){
    window.event.preventDefault()
    console.log("creating topping");
    let form = window.event.target
    // console.log(form.toppingTitle.value, pizzaId)
    let rawTopping = {
      // @ts-ignore
      title: form.toppingTitle.value,
      pizzaId: pizzaId
    }
    toppingService.createTopping(rawTopping)
    
    // @ts-ignore
    form.reset()
  }

  delete(toppingId){
    console.log(toppingId)
    toppingService.delete(toppingId)
  }
}