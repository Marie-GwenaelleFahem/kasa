import '../style/header.css';
import firstLetter from '../assets/logo/logo-header/letter-k.svg'
import kasaLogo from '../assets/logo/logo-header/kasa-logo.svg'
import thirdtLetter from '../assets/logo/logo-header/letter-s.svg'
import lastLetter from '../assets/logo/logo-header/letter-a.svg'
import { Link } from 'react-router-dom'


function Header() {

    return (
        <div className="header">
            <div className="header-top">
                <div className="header-logo">
                    <img src={firstLetter} alt=""></img>
                    <img src={kasaLogo} alt=""></img>
                    <img src={thirdtLetter} alt=""></img>
                    <img src={lastLetter} alt=""></img>
                </div>
                <div className="header-links">
                    <Link to="/"><p>Accueil</p></Link>
                    <Link to="/about"><p>A propos</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Header