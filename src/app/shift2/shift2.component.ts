import { Component } from '@angular/core';

// 3rd part imports
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { Shift } from '../data.service';
import { Communication } from '../comm.service';

@Component({
  selector: 'app-shift2',
  templateUrl: './shift2.component.html',
  styleUrls: ['./shift2.component.css'],
  providers: [ Shift ]
})
export class Shift2Component {
  shift2Datas;
  startTime: string;
  endTime: string;


  constructor(private data: Shift, private comm: Communication) {
    this.shift2Datas = data.shiftData;
    this.onChangeInTime();
  }


onClickingShift2Button(num: number) {
  this.onChangeInTime();
  if (num === 0) {
  const startTimeToCopy = new Object(this.shift2Datas[0].startTime);
  // const startTimeToCopy = {date: new Date(), time: '11:11'};
  const endTimeToCopy = { et: this.shift2Datas[0].endTime };
  // const endTimeToCopy = { date: new Date(), time: '11:11' };
  this.shift2Datas.map(data => { data.startTime = JSON.parse(JSON.stringify(startTimeToCopy));
                                  data.endTime = JSON.parse(JSON.stringify(endTimeToCopy.et));
                              });
  } else {
  this.shift2Datas[num].startTime = JSON.parse(JSON.stringify(this.shift2Datas[num - 1].startTime));
  this.shift2Datas[num].endTime = JSON.parse(JSON.stringify(this.shift2Datas[num - 1].endTime));
  }
}

onClickingSave() {
  this.comm.v1Validity();
  if (this.shift2Datas.validityError.v1 || this.shift2Datas.validityError.v2 || this.shift2Datas.validityError.v3) {
    console.log('Please fix validity errors before saving');
  } else {
    console.log('Saved SHIFT 2 successfully after verifiying validity');

  }
}

onChangeInTime() {
  this.comm.shift2Data = this.shift2Datas;
}

}
