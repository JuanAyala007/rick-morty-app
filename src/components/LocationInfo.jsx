import "./styles/locationInfo.css"

const LocationInfo = ({location}) => {

  return (
    <div className="location">
        <h2 className="location-name">{location?.name}</h2>
        <ul className="location-list">
            <li className="location-item"><span className="location-label">Type </span><span className="location-value">{location?.type}</span></li>
            <li className="location-item"><span className="location-label">Dimension </span><span className="location-value">{location?.dimension}</span></li>
            <li className="location-item"><span className="location-label">Population </span><span className="location-value">{location?.residents.length}</span></li>
        </ul>
    </div>
  )
}

export default LocationInfo