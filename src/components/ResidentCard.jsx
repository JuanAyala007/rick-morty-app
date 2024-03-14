import { useEffect } from "react"
import CustomHooks from "../hooks/CustomHooks"
import './styles/ResidentCard.css'


const ResidentCard = ({url}) => {

 const [character, getCharacter] = CustomHooks(url)

 useEffect(() => {
    getCharacter()
 }, [])
 

  return (
    <article className="resident">
        <header className="resident-header">
        <img className="resident-img" src={character?.image} alt="" />
        
        <div className="status">
            <div className={`status-circle ${character?.status}`}></div>
            <div className="status-value">{character?.status}</div>
        </div>
        </header>

        <section className="resident-body">
            <h3 className="resident-name">{character?.name}</h3>
            <hr className="resident-hr"/>
            
            <ul className="resident-list">
                <li className="resident-item">
                    <span className="resident-label">Species </span>
                    <span className="resident-value">{character?.species}</span>
                </li>

                <li className="resident-item">
                    <span className="resident-label">Origin </span >
                    <span className="resident-value">{character?.origin.name}</span>
                </li>

                <li className="resident-item">
                    <span className="resident-label">Episodes where appear </span>
                    <span className="resident-value">{character?.episode.length}</span>
                </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard