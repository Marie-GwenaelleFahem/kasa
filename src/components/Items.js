function Items(props) {
    return (
        <div className="location">
            <img src={props.annonce.cover} alt=""></img>
            <p>{props.annonce.title}</p>
        </div>
    )
}

export default Items