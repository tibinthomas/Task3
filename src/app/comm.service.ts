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

      const timeArray2 = data.endTime.time.split(':');
      data.endTime.date.setHours(parseInt(timeArray2[0], 0));
      data.endTime.date.setMinutes(parseInt(timeArray2[1], 0));
      this.s1t2.push(data.endTime.date);
    });

    this.shift2Data.map(data => {
      const timeArray1 = data.startTime.time.split(':');
      data.startTime.date.setHours(parseInt(timeArray1[0], 0));
      data.startTime.date.setMinutes(parseInt(timeArray1[1], 0));
      this.s2t1.push(data.startTime.date);

      const timeArray2 = data.endTime.time.split(':');
      data.endTime.date.setHours(parseInt(timeArray2[0], 0));
      data.endTime.date.setMinutes(parseInt(timeArray2[1], 0));
      this.s2t2.push(data.endTime.date);
    });

    for (let i = 0; i <= 6; i++) {
      const a1 = this.s1t1[i];
      const b1 = this.s1t2[i];
      const a2 = this.s2t1[i];
      const b2 = this.s2t2[i];
      const checkFor1 = this.diffBetDates(a1, b1);
      const checkFor2 = this.diffBetDates(a2, b2);
      if (checkFor1.spansDays === true) {
        this.shift1Data[i].endDiffDate = true;
      }

      if (checkFor2.spansDays === true) {
        this.shift2Data[i].endDiffDate = true;
      }

      // tslint:disable-next-line:max-line-length
      if (this.s1t2[i].getHours() >= this.s2t1[i].getHours() || this.s1t2[i].getHours() === this.s2t1[i].getHours() && this.s1t2[i].getMinutes() >= this.s2t1[i].getMinutes()) {
        this.shift1Data[i].valiationError.v1 = true;
        this.shift2Data[i].valiationError.v1 = true;
      } else {
        this.shift1Data[i].valiationError.v1 = false;
        this.shift2Data[i].valiationError.v1 = false;
      }

      // tslint:disable-next-line:max-line-length
      if ((this.shift2Data[i].endDiffDate === true && this.s1t2[i].getHours() >= this.s1t1[i + 1].getHours()) || (this.shift1Data[i].endDiffDate = true && this.s1t2[i].getHours() === this.s1t1[i + 1].getHours() && this.s1t2[i].getMinutes() >= this.s1t1[i + 1].getMinutes())) {
        this.shift1Data[i].valiationError.v2 = true;
        this.shift2Data[i].valiationError.v2 = true;
      } else {
        this.shift1Data[i].valiationError.v2 = false;
        this.shift2Data[i].valiationError.v2 = false;
      }
        
    }
    }

    // tslint:disable-next-line:max-line-length
    diffBetDates(d1: Date, d2: Date): { diff: boolean, spansDays: boolean, diffMin: number, diffHou: number, diffInMins: number } {
        const yearDiff = d2.getFullYear() - d1.getFullYear();
        const monthDiff = d2.getMonth() - d1.getMonth();
        const dayDiff = d2.getDay() - d1.getDay();
        const hourDiff = d2.getHours() - d1.getHours();
        const minDiff = d2.getMinutes() - d1.getMinutes();
        const secDiff = d2.getSeconds() - d1.getSeconds();

        let diff;
        let spansDays = false;
        let diffMin = 0;
        let diffHou = 0;
        let diffInMins = 0;

        if (yearDiff === 0 && monthDiff === 0 && dayDiff === 0 && hourDiff === 0 && minDiff === 0 && secDiff === 0) {
          diff = false;
        } else {
          diff = true;
        }

        if (diff === true) {
          diffMin = minDiff;
          diffHou = hourDiff;
          diffInMins = Math.abs(diffMin) + Math.abs(diffHou) * 60;
        }

        if (diff === true && d2.getHours() < d1.getHours()) {
          spansDays = true;
        }

        return { diff: diff, spansDays: spansDays, diffMin: diffMin, diffHou: diffHou, diffInMins: diffInMins };
    }

}
