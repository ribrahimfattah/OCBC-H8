import './AntrianList.css'
import person from './person.png'

function AntrianList(props) {

    return (
        <div className="row justify-content-start mt-5">
            {/* <div class="rect-movetoRight"></div> */}
            {
                props.dataAntrian.length == 0 ? <h3>ANTRIAN KOSONG!</h3> :
                    props.dataAntrian.map((antrian) => {
                        return (
                            <>
                                <div className="col-1">
                                    <div className="card antri" style={{ width: 5 + 'rem', border: 0 }}>
                                        <div className="card-body">
                                            <img src={person} style={{ width: 50 + 'px' }} className="card-img-top" />
                                            <p key={antrian.id}>{antrian.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
            }
        </div >
    )
}

export default AntrianList