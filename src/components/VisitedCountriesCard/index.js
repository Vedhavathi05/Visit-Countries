import './index.css'

const VisitedCountriesCard = props => {
  const {details, changeVisitStatus} = props
  const {id, name, imageUrl} = details

  const removeVisited = () => {
    changeVisitStatus(id)
  }

  return (
    <div className="card-con1">
      <img src={imageUrl} alt="thumbnail" className="card-container-image" />
      <div className="card-con2">
        <p className="card-paragraph">{name}</p>
        <button type="button" onClick={removeVisited}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default VisitedCountriesCard
