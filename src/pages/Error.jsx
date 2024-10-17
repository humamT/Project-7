import './Error.scss';
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className="Error">
      <h5>404</h5>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to='/' className='retourner'>
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Error;