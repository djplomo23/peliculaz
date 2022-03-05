






export const Card = ({ pelis, setModal, setIndexPeli }) => {

    const handleClick = (i) => {
        setModal(true)
        setIndexPeli(i)
        
    }

    
    return (<div  className="card">
        <img loading="lazy" onClick={() => handleClick(pelis.i) } src={pelis.pelis.image} alt="Avatar" />
        <div className="container">
         
        </div>
    </div>)

}
