import React, {useState, useEffect} from 'react'

export default function Clock() {

    const [date, setDate] = useState(new Date())

    const tick = () => {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(() => {tick()}, 1000)
        return function(){
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h1>{date.toLocaleTimeString()}</h1>
        </>
    )
}