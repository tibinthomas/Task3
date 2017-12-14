import { Component, OnChanges } from '@angular/core';

// 3rd part imports
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { Shift } from '../data.service';
import { Communication } from '../comm.service';

@Component({
  selector: 'app-shift1',
  templateUrl: './shift1.component.html',
  styleUrls: ['./shift1.component.css'],
  providers: [ Shift ]
})
export class Shift1Component implements OnChanges {
  shift1Datas;
  startTime: string;
  endTime: string;


  constructor(private data: Shift, private comm: Communication) {
    this.shift1Datas = data.shiftData;
    this.onChangeInTime();
  }


onClickingShift1Button(num: number) {
  if (num === 0) {
  const startTimeToCopy = this.shift1Datas[0].startTime;
  const endTimeToCopy = this.shift1Datas[0].endTime;
  this.shift1Datas.map(data => { data.startTime = startTimeToCopy;
                                data.endTime = endTimeToCopy;
                              });
  } else {
  this.shift1Datas[num].startTime = this.shift1Datas[num - 1].startTime;
  this.shift1Datas[num].endTime = this.shift1Datas[num - 1].endTime;
  }
}

onClickingSave() {
  this.comm.v1Validity();
}

onChangeInTime() {
  this.comm.shift1Data = this.shift1Datas;
}

ngOnChanges() {
  this.comm.shift1Data = this.shift1Datas;
}

}
