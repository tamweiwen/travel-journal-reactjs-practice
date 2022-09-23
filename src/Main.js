import Cards from "./Cards";
import data from "./data";

export default function Main() {
    
    const cardElements = data.map(card => {
        return <Cards {...card}/>
    })

    return(
        <div className="main">
            {cardElements}
        </div>
    )
}