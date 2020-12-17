import { ProxyState } from "../AppState.js"
import {generateId} from "../Utils/GenerateId.js"

export default class Pizza{
 constructor({title, id}){
  this.title = title
  this.id = id || generateId()
 } 


 get Template(){
  //  when creating the topping for the pizza, make sure to pass the pizzaId so the topping knows who it belongs to

  return /*html*/`
  <div class="card col-4">
                <div class="card-body">
                    <h4 class="card-title">${this.title} <button class="text-warning btn btn-danger" onclick="app.pizzaController.deletePizza('${this.id}')">Consume</button> </h4>

                    <form onsubmit="app.toppingController.createTopping('${this.id}')" >
                    <div class="form-group">
                        <label for="">Topping Title</label>
                        <input type="text" class="form-control" name="toppingTitle" id="toppingTitle" aria-describedby="helpId"
                            placeholder="Pizza title">
                        <button class="btn btn-success" type="submit">Create</button>
                    </div>
                </form>


                    <p class="card-text">Toppings: </p>
                    <div class="row">
                    ${this.Toppings}
                    </div>
                </div>
            </div>
  `
 }


 get Toppings(){
   let template = ""
   let toppings = ProxyState.toppings.filter(t=> t.pizzaId == this.id)
   toppings.forEach(t=> template += t.Template)
   return template
 }
}