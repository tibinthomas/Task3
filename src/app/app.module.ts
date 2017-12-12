import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 2nd party imports
import { Communication } from './comm.service';
// 3rd party imports
import { NgDatepickerModule } from 'ng2-datepicker';
import { ShiftModel } from './model';
import { FormsModule } from '@angular/forms';
import { Shift1Component } from './shift1/shift1.component';
import { Shift2Component } from './shift2/shift2.component';

@NgModule({
  declarations: [
    AppComponent,
    Shift1Component,
    Shift2Component,
  ],
  imports: [
    BrowserModule,
    NgDatepickerModule,
    FormsModule
  ],
  providers: [ Communication ],
  bootstrap: [AppComponent]
})
export class AppModule { }
