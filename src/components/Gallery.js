import '../style/gallery.css';
import { useEffect, useState } from 'react'
import Items from './Items'

function Gallery() {
    const [ annonceList, setAnnonceList ] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(response => {
            return response.json()
        }) 
        .then(data => {
            setAnnonceList(data) 
        })
        .catch(error => {
            console.log(error)
        })
    }) 
    
    return (
        <div className="gallery">
            {annonceList.map(annonce => <Items key={annonce.id} annonce={annonce} />)}
        </div>
    )
}

export default Gallery