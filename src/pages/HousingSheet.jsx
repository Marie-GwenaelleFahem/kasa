import Header from "../components/Header"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import '../style/housingsheet.css'
import Chevron from '../assets/icon/chevron-up.png'
import Collapse from '../components/Collapse'

function HousingSheet() {
    
    let {id} = useParams()

    const [annonce, setAnnonce] = useState({host:{}})
    useEffect( () => {
        fetch('/data.json')
        .then(response => {
            return response.json()
        }) 
        .then(data => {
            setAnnonce(data.find(annonce => annonce.id === id))
        })
        .catch(error => {
            console.log(error)
        })
    })

    return (
        <div>
            <Header />
            <div className="banner-housing">
                <h1>{annonce.title}</h1>
                <p>{annonce.location}</p>
                <p>{annonce.host.name}</p>
                <img src={annonce.host.picture} alt="" className="profil-pic"></img>
                <div id="details">
                    <Collapse title={'Description'} description={annonce.description} />
                    <Collapse title={'Equipements'} description={annonce.equipments} />
                </div>
            </div>
                       
            <Footer />
        </div>
    )
}

export default HousingSheet