import './Antrian.css'
import AntrianList from '../antrian-list/AntrianList'
import AntrianCreate from '../antrian-create/AntrianCreate'

import { useState } from 'react'

function Antrian() {

    const [antrian, setAntrian] = useState([
        // { id: 1, name: 'Rasyid' },
        // { id: 2, name: 'Ibrahim' },
        // { id: 3, name: 'Fattah' },
        // 'IBRA', 'RASYID'
    ])

    const [batasAntrian, setBatasAntrian] = useState(5)

    const eventBatasAntrian = (BatasAntrian) => {
        // setAntrian(antrian.concat(NewAntrian))
        setBatasAntrian(BatasAntrian)
    }

    const eventCreateAntrian = (NewAntrian) => {
        setAntrian(antrian.concat(NewAntrian))
        // setAntrian([...antrian, NewAntrian])
    }

    const eventMajukanAntrian = () => {
        const items = antrian;
        if (items.length > 0) {
            const firstIndex = 0;
            setAntrian(items.filter((item, index) => index !== firstIndex));
        }
    }

    return (
        <>
            <div className="card text-center mt-5">
                <div className="card-header">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="float-end">Antrian</h2>
                        </div>
                        <div className="col-5">
                            <h4 className="float-end">{antrian.length}/{batasAntrian}</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title bg-dark text-danger">
                        <marquee>Batas antrian {batasAntrian} orang, harap menunggu</marquee>
                    </h5>

                    <AntrianCreate
                        onBatasAntrian={eventBatasAntrian}
                        onCreateAntrian={eventCreateAntrian}
                        onMajukanAntrian={eventMajukanAntrian}
                        dataBatasAntrian={batasAntrian}
                        dataAntrian={antrian} />
                    <AntrianList dataAntrian={antrian} />
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        <div className="col-6">
                            <p className="float-start"><i className="fas fa-baseball-ball"></i>Pintu Keluar</p>

                        </div>
                        <div className="col-6">
                            <p className="float-end">Pintu Masuk</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Antrian