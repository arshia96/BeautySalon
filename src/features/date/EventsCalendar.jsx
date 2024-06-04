import React, { useState } from 'react'
import faLocale from '@fullcalendar/core/locales/fa'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId } from '../../utils/event-utils'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Modal from '../../ui/Modal'
import TextField from '../../ui/TextField'
import { useForm } from 'react-hook-form'

export default function EventsCalendar({ INITIAL_EVENTS }) {
    const [ addOpen, setAddOpen ] = useState(false);
    const [ removeOpen, setRemoveOpen ] = useState(false);
    const [ clickinfo, setClickinfo ] = useState({event:{title:''}});
    const [ selectinfo, setSelectinfo ] = useState({});
    const [ CalendarApi, setCalendarApi ] = useState({});
    // const [ weekendsVisible, setWeekendsVisible ] = useState(true);
    const [ currentEvents, setCurrentEvents ] = useState([]);
    const { register, handleSubmit, formState:{errors}, reset } = useForm();

    function handleWeekendsToggle() {
        setWeekendsVisible(!weekendsVisible)
    }

    function handleDateSelect(selectInfo) {
        let calendarApi = selectInfo.view.calendar
        setSelectinfo(selectInfo);
        setCalendarApi(calendarApi);
        setAddOpen(true);
        calendarApi.unselect()
    }

    function submitAddEvent(data) {
        const { title } = data;
        if (title) {
            CalendarApi.addEvent({
                id: createEventId(),
                title: title,
                start: selectinfo.startStr,
                end: selectinfo.endStr,
                allDay: selectinfo.allDay
            })
        }
        setAddOpen(false);
        setSelectinfo({});
        setCalendarApi({});
        reset();
    }

    function handleEventClick(clickInfo) {
        setClickinfo(clickInfo);
        setRemoveOpen(true);
    }

    function handleEvents(events) {
        setCurrentEvents(events)
    }

    function handleRemoveEvent(clickInfo){
        clickInfo.event.remove();
        setRemoveOpen(false);
        setClickinfo({event:{}});
    }

    return (
        <div className='demo-app'>
        <Modal
            open={removeOpen}
            onClose={() => setRemoveOpen(false)}
            title={`حذف ${clickinfo.event.title}`}
        >
            <ConfirmDelete resourceName={clickinfo.event.title} onClose={() => setRemoveOpen(false)} onConfirm={() => handleRemoveEvent(clickinfo)} />
        </Modal>
        <Modal
            open={addOpen}
            onClose={() => setAddOpen(false)}
            title={`افزودن رویداد جدید`}
        >
            <form
              className='flex flex-col gap-y-5'
              onSubmit={handleSubmit(submitAddEvent)}
            >
                <TextField 
                    label={'یک عنوان برای ثبت رویداد جدید وارد کنید'}
                    name='title'
                    register={register}
                    validationSchema={{
                        minLength:{
                            value: 5,
                            message: "عنوان باید حداقل 5 حرف داشته باشد"
                        },
                        required: "عنوان ضروری است",
                    }}
                    errors={errors}
                    required={true}
                />
                <button className='btn btn--primary text-secondary-700'>افزودن</button>
            </form>
        </Modal>
        {/* <Sidebar
            weekendsVisible={weekendsVisible}
            handleWeekendsToggle={handleWeekendsToggle}
            currentEvents={currentEvents}
        /> */}
        <div className='demo-app-main text-secondary-700'>
            <FullCalendar
                titleRangeSeparator=' تا '
                locale={faLocale}
                direction='rtl'
                firstDay={6}
                
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,today,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='timeGridWeek'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                initialEvents = {INITIAL_EVENTS}
                // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
            />
        </div>
        </div>
    )
    }

    function renderEventContent(eventInfo) {
    return (
        <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        </>
    )
    }

    function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
    return (
        // <div className='demo-app-sidebar'>
        // <div className='demo-app-sidebar-section'>
        //     <h2>Instructions</h2>
        //     <ul>
        //     <li>Select dates and you will be prompted to create a new event</li>
        //     <li>Drag, drop, and resize events</li>
        //     <li>Click an event to delete it</li>
        //     </ul>
        // </div>
        // <div className='demo-app-sidebar-section'>
        //     <label>
        //     <input
        //         type='checkbox'
        //         checked={weekendsVisible}
        //         onChange={handleWeekendsToggle}
        //     ></input>
        //     toggle weekends
        //     </label>
        // </div>
        // <div className='demo-app-sidebar-section'>
        //     <h2>All Events ({currentEvents.length})</h2>
        //     <ul>
        //     {currentEvents.map((event) => (
        //         <SidebarEvent key={event.id} event={event} />
        //     ))}
        //     </ul>
        // </div>
        // </div>
        <div></div>
    )
    }

    // function SidebarEvent({ event }) {
    // return (
    //     <li key={event.id}>
    //     <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
    //     <i>{event.title}</i>
    //     </li>
    // )
// }