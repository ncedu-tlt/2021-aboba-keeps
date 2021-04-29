import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TestComponentComponent } from "./test-component/test-component.component";
import { ButtonComponentComponent } from "./button-component/button-component.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
      AppComponent,
      TestComponentComponent,
      ButtonComponentComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
