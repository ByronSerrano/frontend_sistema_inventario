import { Link } from 'react-router-dom';
import '../../styles/ButtonForm.css';

const ButtonForm = () => {
    return (
        <section className="button-container">
            <Link to="/productos">
              <button className="button-cancel" type="button">Cancelar</button>
            </Link>
            <button className="button-submit" type="submit">Agregar</button>
        </section>
    )
}

export default ButtonForm;
