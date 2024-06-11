import { Link } from 'react-router-dom';
import '../styles/ButtonForm.css';

const ButtonRoute = (props) => {
    return (
        <section className="button-container">
            <Link to={`/${props.route}`}>
              <button className="button" type="button">{props.text}</button>
            </Link>
        </section>
    )
}

export default ButtonRoute;
