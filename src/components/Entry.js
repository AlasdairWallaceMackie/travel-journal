export default function Entry(props){
    return (
        <>
            <div className="entry p-3">
                <div className="d-flex">
                    <img src={props.data.imageUrl} alt={`${props.data.title}`} className="entry--img rounded-3 me-3"/>
                    <div>
                        <div>
                            <span className="text-primary">
                                <svg className="entry--img me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                            </span>
                            <span className="navbar-brand">{props.data.location}</span>
                            <a href={props.data.googleMapsUrl} className="text-muted ms-3">View on Google Maps</a>
                        </div>
                        <h3>{props.data.title}</h3>
                        <strong>{props.data.startDate} - {props.data.endDate}</strong>
                        <p className="mt-3">{props.data.description}</p>
                    </div>
                </div>
            </div>
            <hr className="hr"/>
        </>
    )
}