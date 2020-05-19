import React, { useState, useEffect } from 'react';

import firebase from 'firebase/app';

const AddTimeEntry = () => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        firebase.firestore().collection('times')
            .add({
                title,
                time_seconds: parseInt(time)
            })
            .then(() => {
                setTitle('')
                setTime('')
            })

    }

    return (

        <form onSubmit={onSubmit}>
            <h4>Add Time Entry</h4>
            <div>
                <label>Title</label>
                <input autoFocus type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Time</label>
                <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <button>Add Time Entry</button>
        </form>

    );
}

export default AddTimeEntry;