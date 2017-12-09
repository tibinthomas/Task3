import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 2nd party imports
import { Shift2 } from './data.service';

// 3rd party imports
import { NgDatepickerModule } from 'ng2-datepicker';
import { Shift2Model } from './model';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDatepickerModule,
    FormsModule
  ],
  providers: [Shift2],
  bootstrap: [AppComponent]
})
export class AppModule { }
