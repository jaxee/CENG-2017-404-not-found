import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SuppliesComponent } from './supplies/supplies.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SuppliesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
