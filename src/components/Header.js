import '../style/header.css';
import firstLetter from '../assets/logo/logo-header/letter-k.svg'
import kasaLogo from '../assets/logo/logo-header/kasa-logo.svg'
import thirdtLetter from '../assets/logo/logo-header/letter-s.svg'
import lastLetter from '../assets/logo/logo-header/letter-a.svg'
import banner from '../assets/img/header-img.png'


function Header() {
    const homePage = "Accueil";
    const about = "A Propos";
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
                    <a href="#">{homePage}</a>
                    <a href="#">{about}</a>
                </div>
            </div>
            <div className="header-bottom"> 
                <div className="banner-header">
                    <img src={banner} alt=""></img>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
        </div>
    )
}

export default Header