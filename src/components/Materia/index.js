import './styles.css'

function Materia(props) {
    return(
        <div className="Materia__container">
            <div className="courseemoji">
                <span>{props.emoji}</span>
            </div>
            <div className="course__title">
                <h3>{props.nombre}</h3>
            </div>
            <div>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Materia;