import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterControlComponent } from './components/counter-control/counter-control.component';
import { RadioControlComponent } from './components/radio-control/radio-control.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlComponent,
    RadioControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
