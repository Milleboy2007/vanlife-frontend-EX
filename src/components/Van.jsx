import "./Van.css"

function Van({ van }) {
  return (
    <div className="van-detail">
      <img src={van.imageUrl} />
      <i className={`van-type ${van.type} selected`}>
        {van.type}
      </i>
      <h2>{van.name}</h2>
      <p className="van-price"><span>${van.price}</span>/day</p>
      <p>{van.description}</p>
      <button className="link-button">Rent this van</button>
    </div>
  )
}

export default Van  