import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { OrderDataService } from "./order-data.service";

@NgModule({
  declarations: [AppComponent, routingComponents, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [OrderDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
