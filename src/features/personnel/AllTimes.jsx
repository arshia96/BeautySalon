import EventsCalendar from "../date/EventsCalendar";
import React from 'react'
import { reservedTimes } from "../../services/reservedTimes";

function AllTimes() {
    return (
        <EventsCalendar INITIAL_EVENTS={reservedTimes} />
    )
}

export default AllTimes