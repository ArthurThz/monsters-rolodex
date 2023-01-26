import './cards-list.styles.css'
import Card from '../card/card'

function CardsList({ monsters }) {
    return (
        <div className="cards-list">
            {monsters.map((monsters) => {
                const { name, id, email } = monsters
                return <Card key={id} MonsterId={id} MonsterName={name} MonsterEmail={email} />
            })}
        </div>
    )
}

export default CardsList