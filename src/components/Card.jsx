import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className="element-card">
            {props.children}
        </div>
    )
}

export default Card;
