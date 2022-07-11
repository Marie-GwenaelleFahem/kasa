import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../style/collapse.css'
import { useState } from 'react'

function Collapse({title, description, open=true}) {

    const [isOpen, setIsOpen ] = useState(open)

    function toggleCollapse() {
        setIsOpen(!isOpen); 
    }

    return (
        <div className={`collapse ${isOpen ? 'show' : ''}`}>
            <div className="title" onClick={toggleCollapse}>
                {title}<FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    )
}

export default Collapse