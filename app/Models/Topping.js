import { generateId } from "../Utils/GenerateId.js"

export default class Topping{
  constructor({title, pizzaId, id}){
      this.title = title
      this.id = id || generateId(),
      this.pizzaId = pizzaId
  }

  get Template(){
    return /*html*/`
    <div class="col-6">
    <h5>
    ${this.title}
    <i class="fa fa-trash text-danger cursor-pointer" onclick="app.toppingController.delete('${this.id}')" aria-hidden="true"></i>
    </h5>
    </div>
    `
  }
}