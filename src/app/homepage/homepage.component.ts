import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  routeToHome() {
    this.router.navigate(["../homepage"], { relativeTo: this.route });
  }

  routeToOrders() {
    this.router.navigate(["../orders"], { relativeTo: this.route });
  }

  routeToCart() {
    this.router.navigate(["../cart"], { relativeTo: this.route });
  }
}
