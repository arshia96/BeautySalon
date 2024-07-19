// export function getSubmittedTimes() {
//     const database = {
//         "1403/4/20" : [
//           {
//             id: 1,
//             service: "nailService",
//             times: [
//               {
//                 id: 1,
//                 value: "10:00", 
//                 status: "available"
//               },
//               {
//                 id: 2,
//                 value: "10:30",
//                 status: "available"
//               },
//               {
//                 id: 3,
//                 value: "13:00",
//                 status: "unavailable"
//               }
//             ]
//           },
//           {
//             id: 2,
//             service: "eyelashService",
//             times: [
//               {
//                 id: 1,
//                 value: "11:00",
//                 status: "available"
//               },
//               {
//                 id: 2,
//                 value: "11:30",
//                 status: "unavailable"
//               },
//               {
//                 id: 3,
//                 value: "12:00",
//                 status: "available"
//               }
//             ]
//           }
//         ]
//       }
//     return database;

import { useDayToString } from "../hooks/useTodayString";
import { getDates } from "../utils/NearestFriday";

// }
function useTodayString() {
  let todayStr = new Date().toISOString().replace(/T.*$/, '');
  return todayStr;
}
const todayStr = useTodayString();
const friday = useDayToString(getDates(1, "friday"));
let eventGuid = 0;

export const reservedTimes = [
  {
    id: createEventId(),
    title: 'تعطیل رسمی',
    start: friday
  },
  {
    id: createEventId(),
    title: 'ناخن کاری',
    operator: 'خانم احمدی',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T14:30:00'
  },
  {
    id: createEventId(),
    title: 'کاشت مژه',
    operator: 'خانم محمدی',
    start: todayStr + 'T10:00:00',
    end: todayStr + 'T11:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}

function splitIntoHalfHourSlots(startTime, endTime) {
  let slots = [];
  let start = new Date(startTime);
  let end = new Date(endTime);

  while (start < end) {
    let slotEnd = new Date(start);
    slotEnd.setMinutes(start.getMinutes() + 30);
    slots.push({
      value: start.toTimeString().substr(0, 5),
      // status: 'unavailable'
    });
    start = slotEnd;
  }

  return slots;
}

function addToDatabase(database, date, service, slots) {
  if (!database[date]) {
    database[date] = [];
  }

  let serviceEntry = database[date].find(entry => entry.service === service);

  if (!serviceEntry) {
    serviceEntry = {
      id: database[date].length + 1,
      service: service,
      times: []
    };
    database[date].push(serviceEntry);
  }

  slots.forEach(slot => {
    serviceEntry.times.push({
      id: serviceEntry.times.length + 1,
      value: slot.value,
      status: slot.status
    });
  });
}

export function getSubmittedTimes() {
  const database = {};

  reservedTimes.forEach(event => {
    let service, startTime, endTime;
    
    if (event.title === 'ناخن کاری') {
      service = 'nailService';
    } else if (event.title === 'کاشت مژه') {
      service = 'eyelashService';
    }

    if (service) {
      startTime = event.start;
      endTime = event.end || (new Date(startTime).setHours(new Date(startTime).getHours() + 1));
      const date = startTime.split('T')[0].replace(/-/g, '/');
      const slots = splitIntoHalfHourSlots(startTime, endTime);
      addToDatabase(database, date, service, slots);
    }
  });

  // Adding some default available slots for demonstration
  Object.keys(database).forEach(date => {
    database[date].forEach(serviceEntry => {
      const timeSlots = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];
      timeSlots.forEach(time => {
        if (!serviceEntry.times.find(slot => slot.value === time)) {
          serviceEntry.times.push({
            id: serviceEntry.times.length + 1,
            value: time,
            status: 'available'
          });
        }
      });
      // Sort the times by value
      serviceEntry.times.sort((a, b) => a.value.localeCompare(b.value));
    });
  });

  console.log("------");
  console.log(database);

  return database;
}
