import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/";
import { OrdersComponent } from "./orders/orders.component";

@Injectable()
export class OrderDataService {
  constructor() {}

  r3_3100 = {
    model: "Ryzen 3 3100",
    price: "8,700",
    description:
      "One of the most value for money processors for people on a budget",
    image: "assets/product1.png",
  };

  printRyzen(object, containerId) {
    let el = document.createElement("li");
    el.innerText = JSON.stringify(object, null, 4);
    el.style.color = "yellow";
    document.getElementById(containerId).appendChild(el);
  }

  printGTX(object, containerId) {
    let el = document.createElement("li");
    el.innerText = JSON.stringify(object, null, 4);
    el.style.color = "yellow";
    document.getElementById(containerId).appendChild(el);
  }

  printB450(object, containerId) {
    let el = document.createElement("li");
    el.innerText = JSON.stringify(object, null, 4);
    el.style.color = "yellow";
    document.getElementById(containerId).appendChild(el);
  }

  private objectData = new BehaviorSubject<string>("ff");
  currentObj = this.objectData.asObservable();

  private ryzen_data = new BehaviorSubject(this.r3_3100);
  current_ryzen_data = this.ryzen_data.asObservable();
}
