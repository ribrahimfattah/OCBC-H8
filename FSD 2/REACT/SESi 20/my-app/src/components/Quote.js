import React, { useState } from 'react'

const Quote = (props) => {
    const [quote] = useState(props.quote)
    return (
        <>
            <marquee>
                {quote}
            </marquee>
        </>
    )
}

export default Quote