import Header from "../components/Header"
import Collapse from "../components/Collapse"
import Footer from "../components/Footer"
import BannerAbout from '../assets/img/background-about.png'
import '../style/about.css'

function About({open=false}) {
    return (
        <div>
            <Header />
            <div className="banner-about">
                <div className="banner-about-img">
                    <img src={BannerAbout} alt=""></img>
                </div>
            </div>
            <div className="details">
                <Collapse title={'Fiabilité'} description={""} />
                <Collapse title={'Respect'} description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} open={true} />
                <Collapse title={'Service'} description={""} />
                <Collapse title={'Responsabilité'} description={""} />
            </div>
            
            <Footer />
        </div>
    )   
}

export default About