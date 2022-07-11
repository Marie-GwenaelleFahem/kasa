import '../style/error.css'
import errorMessage from '../assets/img/404.png'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="not-found">
            <div className="error-img">
                <img src={errorMessage} alt="404"></img>
            </div>
            <div className="error-msg">
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to="/"><div className="home-page-link">
                <p>Retourner sur la page d’accueil</p>
            </div></Link>
        </div>
    )
}

export default Error