const Movie = (props) => {
  return (
    <div className="movie">
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <p>{props.year}</p>
    </div>
  )
}

export default Movie