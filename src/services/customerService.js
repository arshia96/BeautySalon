export function getSubmittedTimes() {
    const database = {
        "1403/2/10" : [
          {
            id: 1,
            service: "nailService",
            times: [
              {
                id: 1,
                value: "10:00", 
                status: "available"
              },
              {
                id: 2,
                value: "10:30",
                status: "available"
              },
              {
                id: 3,
                value: "13:00",
                status: "unavailable"
              }
            ]
          },
          {
            id: 2,
            service: "eyelashService",
            times: [
              {
                id: 1,
                value: "11:00",
                status: "available"
              },
              {
                id: 2,
                value: "11:30",
                status: "unavailable"
              },
              {
                id: 3,
                value: "12:00",
                status: "available"
              }
            ]
          }
        ]
      }
    return database;
}