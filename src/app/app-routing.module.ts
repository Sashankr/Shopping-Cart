import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { OrdersComponent } from "./orders/orders.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: "", redirectTo: "/homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "cart", component: CartComponent },
  { path: "orders", component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomepageComponent,
  OrdersComponent,
  CartComponent,
];
