import { Record } from './Record';

export enum RecordKind {
  MON_AM,
  MON_PM,
  TUE_AM,
  TUE_PM,
  WED_AM,
  WED_PM,
  THU_AM,
  THU_PM,
  FRI_AM,
  FRI_PM,
  SAT_AM,
  SAT_PM,
}

export function convertToRecord(record: Record, kind: RecordKind, bell: string) {
  switch (kind) {
    case RecordKind.MON_AM: {
      record.monAm = bell;
      break;
    }
    case RecordKind.MON_PM: {
      record.monPm = bell;
      break;
    }
    case RecordKind.TUE_AM: {
      record.tueAm = bell;
      break;
    }
    case RecordKind.TUE_PM: {
      record.tuePm = bell;
      break;
    }
    case RecordKind.WED_AM: {
      record.wedAm = bell;
      break;
    }
    case RecordKind.WED_PM: {
      record.wedPm = bell;
      break;
    }
    case RecordKind.THU_AM: {
      record.thuAm = bell;
      break;
    }
    case RecordKind.THU_PM: {
      record.thuPm = bell;
      break;
    }
    case RecordKind.FRI_AM: {
      record.friAm = bell;
      break;
    }
    case RecordKind.FRI_PM: {
      record.friPm = bell;
      break;
    }
    case RecordKind.SAT_AM: {
      record.satAm = bell;
      break;
    }
    case RecordKind.SAT_PM: {
      record.satPm = bell;
      break;
    }
  }

  return record
}
