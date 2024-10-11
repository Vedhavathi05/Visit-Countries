import './index.css'

const CountriesList = props => {
  const {details, changeVisitStatus} = props
  const {id, name, isVisited} = details
  const changeStatus = () => {
    changeVisitStatus(id)
  }
  return (
    <div>
      <div className="bg-container-for-countries">
        <p>{name}</p>
        {isVisited ? (
          <p onClick={changeStatus} className="styling">
            Visited
          </p>
        ) : (
          <button
            type="button"
            className="button-styling"
            onClick={changeStatus}
          >
            Visit
          </button>
        )}
      </div>
      <hr className="horizontal-rule" />
    </div>
  )
}

export default CountriesList
