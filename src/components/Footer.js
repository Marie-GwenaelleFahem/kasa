import '../style/footer.css'
import FirstLetter from '../assets/logo/logo-footer/letter-k.png'
import HomeLogo from '../assets/logo/logo-footer/home.png'
import ThirdLetter from '../assets/logo/logo-footer/letter-s.png'
import LastLetter from '../assets/logo/logo-footer/letter-a.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={FirstLetter}></img>
                <img src={HomeLogo}></img>
                <img src={ThirdLetter}></img>
                <img src={LastLetter}></img>
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer