import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import interactionPlugin from "@fullcalendar/interaction"
import AddEventModal from './AddEventModal'
import axios from 'axios'
import moment from 'moment'
import es from 'date-fns/locale/es';

const Calendar = () => {

    const [modalOpen, setmodalOpen] = useState(false)
    const [events, setEvents] = useState([])
    const calendarRef = useRef(null);

    const onEventAdded = (e)=>{
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
          start: moment(e.start).toDate(),
          title: e.title
        })
    }

    const hadleEventAdd = async (data)=>{
        const res = await axios.post('https://api-citas-isoft.herokuapp.com//api/calendar', data.event)
        console.log(res)
    }

    const hadleDatesSet = async (data)=>{
      const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/calendar?start='+moment(data.start).toISOString())
      setEvents(res.data);
      console.log(res.data)
  }



  return (
    <div>
    {/* <button onClick={()=>setmodalOpen(true)}>Add</button> */}
    
    <div style={{width: '90%'}}>
    <FullCalendar
            
            ref={calendarRef}
            locale={es}
            events={events}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            eventAdd={e=>hadleEventAdd(e)}
            datesSet={(date)=>hadleDatesSet(date)}
        />
    </div>

        <AddEventModal isOpen={modalOpen} onClose={()=> setmodalOpen(false)} onEventAdded={(e) => onEventAdded(e)}/>
        
    </div>
  )
}

export default Calendar