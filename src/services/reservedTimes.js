import useTodayString, {useDayToString} from "../hooks/useTodayString";
import { getDates } from "../utils/NearestFriday";

const todayStr = useTodayString();
const friday = useDayToString(getDates(1, "friday"));
let eventGuid = 0

export const reservedTimes = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: todayStr
  // },
  {
    id: createEventId(),
    title: 'تعطیل رسمی',
    start: friday
  },
  {
    id: createEventId(),
    title: 'ناخن کاری',
    operator: 'خانم احمدی',
    start: useDayToString(new Date("2024/7/9").toISOString()) + 'T12:00:00',
    end: useDayToString(new Date("2024/7/9").toISOString()) + 'T14:30:00'
  }, 
  {
    id: createEventId(),
    title: 'کاشت مژه',
    operator: 'خانم محمدی',
    start: todayStr + 'T10:00:00',
    end: todayStr + 'T10:30:00'
  }
]
console.log(reservedTimes);
export function createEventId() {
  return String(eventGuid++)
}