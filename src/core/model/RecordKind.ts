import { Record } from './Record';

export enum RecordKind {
  MON_AM = '월요일 오전',
  MON_PM = '월요일 오후',
  TUE_AM = '화요일 오전',
  TUE_PM = '화요일 오후',
  WED_AM = '수요일 오전',
  WED_PM = '수요일 오후',
  THU_AM = '목요일 오전',
  THU_PM = '목요일 오후',
  FRI_AM = '금요일 오전',
  FRI_PM = '금요일 오후',
  SAT_AM = '토요일 오전',
  SAT_PM = '토요일 오후',
  NONE = '없음'
}

export function checkBellExists(record: Record, kind: RecordKind) {
  switch (kind) {
    case RecordKind.MON_AM: {
      return record.monAm != ''
    }
    case RecordKind.MON_PM: {
      return record.monPm != ''
    }
    case RecordKind.TUE_AM: {
      return record.tueAm != ''
    }
    case RecordKind.TUE_PM: {
      return record.tuePm != ''
    }
    case RecordKind.WED_AM: {
      return record.wedAm != ''
    }
    case RecordKind.WED_PM: {
      return record.wedPm != ''
    }
    case RecordKind.THU_AM: {
      return record.thuAm != ''
    }
    case RecordKind.THU_PM: {
      return record.thuPm != ''
    }
    case RecordKind.FRI_AM: {
      return record.friAm != ''
    }
    case RecordKind.FRI_PM: {
      return record.friPm != ''
    }
    case RecordKind.SAT_AM: {
      return record.satAm != ''
    }
    case RecordKind.SAT_PM: {
      return record.satPm != ''
    }
  }

  return false
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
