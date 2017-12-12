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
  if (num === 0) {
  const startTimeToCopy = this.shift2Datas[0].startTime;
  const endTimeToCopy = this.shift2Datas[0].endTime;
  this.shift2Datas.map(data => { data.startTime = startTimeToCopy;
                                data.endTime = endTimeToCopy;
                              });
  } else {
  this.shift2Datas[num].startTime = this.shift2Datas[num - 1].startTime;
  this.shift2Datas[num].endTime = this.shift2Datas[num - 1].endTime;
  }
}

onClickingSave() {
  this.comm.v1Validity();
  console.log('Saved SHIFT 2 successfully after verifiying validity');
}

onChangeInTime() {
  this.comm.shift2Data = this.shift2Datas;
}

}
