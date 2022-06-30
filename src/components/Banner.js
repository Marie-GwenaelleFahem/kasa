import '../style/banner.css'
import banner from '../assets/img/header-img.png'


function Banner() {
    return (
        <div className="banner">
            <div className="banner-header">
                <img src={banner} alt=""></img>
                <p>Chez vous, partout et ailleurs</p>
             </div>
        </div>
    )
}

export default Banner