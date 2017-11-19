import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SuppliesComponent } from './supplies/supplies.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SuppliesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
