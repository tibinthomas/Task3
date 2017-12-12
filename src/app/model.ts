export interface ShiftModel {
  checked: boolean;
  day: string;
  startTime: { date: Date, time: string };
  endTime: { date: Date, time: string };
  active: { status: boolean, text: string, num: number };
  valiationError: { v1: boolean, v2: boolean, v3: boolean };
  endDiffDate: boolean;
}

