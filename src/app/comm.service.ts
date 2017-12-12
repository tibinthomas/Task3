import { Subject } from 'rxjs/Subject';
import { ShiftModel } from './model';
import * as moment from 'moment';

export class Communication {
  shift1Data: ShiftModel[];
  shift2Data: ShiftModel[];
  s1t1: Date[] = [];
  s1t2: Date[] = [];
  s2t1: Date[] = [];
  s2t2: Date[] = [];

  date;

  constructor() {
  }

  v1Validity() {

    this.shift1Data.map(data => {
      const timeArray1 = data.startTime.time.split(':');
      data.startTime.date.setHours(parseInt(timeArray1[0], 0));
      data.startTime.date.setMinutes(parseInt(timeArray1[1], 0));
      this.s1t1.push(data.startTime.date);

      const timeArray2 = data.startTime.time.split(':');
      data.endTime.date.setHours(parseInt(timeArray2[0], 0));
      data.endTime.date.setMinutes(parseInt(timeArray2[1], 0));
      this.s1t2.push(data.endTime.date);
    });

    this.shift2Data.map(data => {
      const timeArray1 = data.startTime.time.split(':');
      data.startTime.date.setHours(parseInt(timeArray1[0], 0));
      data.startTime.date.setMinutes(parseInt(timeArray1[1], 0));
      this.s2t1.push(data.startTime.date);

      const timeArray2 = data.startTime.time.split(':');
      data.endTime.date.setHours(parseInt(timeArray2[0], 0));
      data.endTime.date.setMinutes(parseInt(timeArray2[1], 0));
      this.s2t2.push(data.endTime.date);
    });

    for (let i = 0; i <= 6; i++) {
      if (this.s1t2[i] < this.s2t1[i]) {
        this.shift2Data[i].valiationError.v1 = true;
        console.log(`s1t1:  ${this.s1t1[i]},`);
      }
    }

  }

}
