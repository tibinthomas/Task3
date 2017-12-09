import { Component } from '@angular/core';

// 3rd part imports
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { Shift2 } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shift2Datas;


  constructor(private data: Shift2) {
    this.shift2Datas = data.shift2Data;
  }

options: DatepickerOptions = {
  minYear: 1970,
  maxYear: 2030,
  displayFormat: 'hh mm ss',
  barTitleFormat: 'MMMM YYYY',
  firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
};

date = new Date();

onClickingShift2Button() {
  return true;
}

}
