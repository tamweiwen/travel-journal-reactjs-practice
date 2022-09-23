

export default function Cards(props) {

    return(
        <div className="card">
            <div className="card-content">
                <div className="img--holder">
                    <img src={props.imageUrl} alt={props.title} />
                </div>
                <div className="info-holder">
                    <div className="location-info">
                        <h3 className="location"><i className="fa-solid fa-location-dot"></i>{props.location}</h3>
                        <a className="mapUrl" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h2 className="title">{props.title}</h2>
                    <h4 className="dates">{props.startDate} - {props.endDate}</h4>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            {/* <hr className="theme-break" /> */}
        </div>
    )
}