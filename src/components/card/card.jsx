import './card.styles.css'

function Card({ MonsterId, MonsterName, MonsterEmail }) {
    return (
        <div key={MonsterId} className="cards-container">
            <img src={`https://robohash.org/${MonsterId}?set=set2&size=180x180`} alt={`monster ${MonsterName}`} />
            <h2 className="monsters-name">{MonsterName}</h2>
            <p className="monsters-email">{MonsterEmail}</p>
        </div>
    )
}

export default Card