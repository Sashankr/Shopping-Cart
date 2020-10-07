import { trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OrderDataService } from "../order-data.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderData: OrderDataService
  ) {}

  objectData: string;
  ryzenObject: object;

  ngOnInit() {
    this.orderData.currentObj.subscribe(
      (objectData) => (this.objectData = objectData)
    );

    this.orderData.current_ryzen_data.subscribe(
      (ryzenObject) => (this.ryzenObject = ryzenObject)
    );
    // this.printRyzenData();
  }

  routeToHome() {
    this.router.navigate(["../homepage"], { relativeTo: this.route });
  }

  routeToOrders() {
    this.router.navigate(["../orders"], { relativeTo: this.route });
  }

  routeToCart() {
    this.router.navigate(["../cart"], { relativeTo: this.route });
  }

  // printRyzenData() {
  //   const ryzen_tr = document.getElementById("ryzen3");
  //   let td = document.createElement("td");
  //   td.innerText = JSON.stringify(this.ryzenObject, null, 4);
  //   ryzen_tr.appendChild(td);
  // }
}
