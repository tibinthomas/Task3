import { ShiftModel } from './model';

export class Shift {

shiftData: ShiftModel[] = [
  {
    checked: true,
    day: 'Monday',
    startTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    endTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    active: { status: true, text: 'APPLY FOR ALL WEEK', num: 0 },
    valiationError: { v1: false, v2: false, v3: false },
    endDiffDate: false
  },

  {
    checked: true,
    day: 'Tuesday',
    startTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    endTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    active: { status: true, text: 'COPY THE ABOVE', num: 1 },
    valiationError: { v1: false, v2: false, v3: false },
    endDiffDate: false
  },

  {
    checked: true,
    day: 'Wednesday',
    startTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    endTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    active: { status: true, text: 'COPY THE ABOVE', num: 2 },
    valiationError: { v1: false, v2: false, v3: false },
    endDiffDate: false
  },

  {
    checked: true,
    day: 'Thursday',
    startTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    endTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    active: { status: true, text: 'COPY THE ABOVE', num: 3  },
    valiationError: { v1: false, v2: false, v3: false },
    endDiffDate: false
  },

  {
    checked: true,
    day: 'Friday',
    startTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    endTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    active:  { status: true, text: 'COPY THE ABOVE', num: 4 },
    valiationError: { v1: false, v2: false, v3: false },
    endDiffDate: false
  },

  {
    checked: true,
    day: 'Sunday',
    startTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    endTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    active: { status: true, text: 'COPY THE ABOVE', num: 5 },
    valiationError: { v1: false, v2: false, v3: false },
    endDiffDate: false
  },

  {
    checked: true,
    day: 'Sunday',
    startTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    endTime: { date: new Date('12/12/2017 00:00'), time: '00:00' },
    active: { status: true, text: 'COPY THE ABOVE', num: 6 },
    valiationError: { v1: false, v2: false, v3: false },
    endDiffDate: false
  }
];

}
