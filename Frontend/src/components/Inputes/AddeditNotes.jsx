import React from 'react'
import { Link } from 'react-router-dom'
const AddeditNotes = ({ setopenaddIsShown }) => {
    return (
        <div>
            <button onClick={() => setopenaddIsShown({
                isShown: false,
                type: 'add',
                data: null
            })}>
                cut

            </button>
            <h1>Hello DM!</h1>

        </div>
    )
}

export default AddeditNotes
