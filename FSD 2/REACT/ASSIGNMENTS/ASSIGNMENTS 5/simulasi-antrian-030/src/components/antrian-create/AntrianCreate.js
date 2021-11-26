import './AntrianCreate.css'
import NotifFull from '../notif/Full'
import NotifEmpty from '../notif/DataKosong'
import { useEffect, useState } from 'react'

function AntrianCreate(props) {

    const [notifFull, setNotifFull] = useState('')
    const [notifEmpty, setNotifEmpty] = useState('')
    const [inputAntrian, setInputAntrian] = useState('')
    const [inputBatasAntrian, setInputBatasAntrian] = useState('')
    const batasAntrian = props.dataBatasAntrian
    const antrian = props.dataAntrian.length

    useEffect(() => {
        setInterval(() => { setNotifFull() }, 3000)
        setInterval(() => { setNotifEmpty() }, 3000)
    }, [])

    const handleSubmit = (event) => {

        event.preventDefault()

        const newAntrian = {
            id: Math.floor(Math.random() * 99) + 1,
            name: inputAntrian
        }
        // const newAntrian = inputAntrian

        if (inputAntrian === '') {
            setNotifEmpty(1)
        } else if (batasAntrian == antrian) {
            setNotifFull(1)
        } else {
            props.onCreateAntrian(newAntrian)
            setInputAntrian('')
        }
    }

    const handleBatasAntrian = (event) => {
        event.preventDefault()

        const batasAntrian = inputBatasAntrian

        if (inputBatasAntrian === '') {
            setNotifEmpty(1)
        } else {
            props.onBatasAntrian(batasAntrian)
            setInputBatasAntrian('')
        }
    }

    const handleInputAntrian = (event) => {
        setInputAntrian(event.target.value)
    }

    const handleInputBatasAntrian = (event) => {
        setInputBatasAntrian(event.target.value)
    }

    const handleBtnMajukan = (event) => {
        event.preventDefault()
        props.onMajukanAntrian()
    }

    return (
        <>
            {notifFull == 1 ? <NotifFull /> : ''}
            {notifEmpty == 1 ? <NotifEmpty /> : ''}
            <form className="antrian-form form-control" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" value={inputAntrian} onChange={handleInputAntrian} />
                    <button className="btn btn-outline-secondary" type="submit">Antrikan!</button>
                    <button className="btn btn-outline-secondary" onClick={handleBtnMajukan}>Majukan!</button>
                </div>
            </form>
            <form className="form-control" onSubmit={handleBatasAntrian}>
                <div className="row g-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <div className="input-group">
                            <input type="number" className="form-control" value={inputBatasAntrian} onChange={handleInputBatasAntrian} />
                            <button type="submit" className="btn btn-outline-secondary">Batas Antrian</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AntrianCreate