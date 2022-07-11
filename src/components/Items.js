import { Link } from 'react-router-dom'


function Items(props) {
    return (
        <Link to={`/housingsheet/${props.annonce.id}`}>
            <div className="location">
                <img src={props.annonce.cover} alt=""></img>
                <p>{props.annonce.title}</p>
            </div>
        </Link>
    )
}

export default Items