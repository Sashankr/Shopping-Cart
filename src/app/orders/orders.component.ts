import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, fromEvent } from "rxjs";
import { OrderDataService } from "../order-data.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderDataService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.addProcessor.nativeElement, "click").subscribe((res) => {
      this.orderService.printRyzen(
        this.orderService.current_ryzen_data,
        "elcontainer"
      );
    });

    fromEvent(this.addProcessor.nativeElement, "click").subscribe((res) => {
      this.orderService.printGTX(this.gtx_1660_Super, "elcontainer");
    });

    fromEvent(this.addGraphics.nativeElement, "click").subscribe((res) => {
      this.orderService.printGTX(this.gtx_1660_Super, "elcontainer2");
    });

    fromEvent(this.addB450.nativeElement, "click").subscribe((res) => {
      this.orderService.printB450(this.b450Max, "elcontainer3");
    });
  }

  @ViewChild("addProcessor", { static: false }) addProcessor: ElementRef;
  @ViewChild("addGraphics", { static: false }) addGraphics: ElementRef;
  @ViewChild("addB450", { static: false }) addB450: ElementRef;

  processor_btn = document.getElementById("processor");

  routeToHome() {
    this.router.navigate(["../homepage"], { relativeTo: this.route });
  }

  routeToOrders() {
    this.router.navigate(["../orders"], { relativeTo: this.route });
  }

  routeToCart() {
    this.router.navigate(["../cart"], { relativeTo: this.route });
  }

  r3_3100 = {
    model: "Ryzen 3 3100",
    price: "8,700",
    description:
      "One of the most value for money processors for people on a budget",
    image: "assets/product1.png",
  };

  gtx_1660_Super = {
    model: "GTX 1660 Super",
    price: "25,500",
    description:
      "This graphics card is perfect for all the gaming and editing computers",
    image: "assets/product2.png",
  };

  b450Max = {
    model: "B450 Tomahawk Max",
    price: "11,500",
    description:
      "An excellent future proof motherboard, supports 4th gen processors",
    image: "assets/product3.png",
  };

  // observable = new Observable((subscriber) => {
  //   subscriber.next(this.b450Max.model);
  //   subscriber.next(this.b450Max.price);
  //   subscriber.next(this.b450Max.description);
  //   subscriber.next(this.b450Max.image);
  // });
}
