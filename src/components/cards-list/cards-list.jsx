


function CardsList({ monsters }) {
    return (
        <div>
            {console.log(monsters)}
            {monsters.map((monsters) => {
                return (
                    <h1 key={monsters.id}>{monsters.name}</h1>
                )
            })}
        </div>
    )
}

export default CardsList