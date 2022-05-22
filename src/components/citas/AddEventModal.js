import React, { useState } from 'react'
import Modal from 'react-modal'
import Datetime from 'react-datetime';

const AddEventModal = ({isOpen, onClose, onEventAdded}) => {

    const [title, setTitle] = useState('')
    const [start, setStart] = useState(new Date())

    const onSubmit = (e)=>{
        e.preventDefault()

        onEventAdded({
            title,
            start
        })
        onClose()
    }
  return (
    <div>
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder='title' value={title} onChange={e=> setTitle(e.target.value)}/>

                <div>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)}/>
                </div>

                <input type='submit' value='Add even'/>
            </form>
        </Modal>
    </div>
  )
}

export default AddEventModal