import './Logement.scss';
import Slider from '../components/Slider/Slider';
import { useNavigate, useParams } from 'react-router-dom';
import logements from '../data/logements.json'
import { useEffect, useMemo } from 'react';
import Apart_info from '../components/Apartement_info/Apartement_info';

function Logement() {

  const navigate = useNavigate()
  const { id } = useParams()

  const logement = useMemo(
    () => logements ? logements.find((logement) => logement.id === id
    ) : null, [logements, id])

  useEffect(() => {
    if (!logement) {
      navigate('/404')
    }
  }, [logement, navigate]);

  return (
    <div className="Logement">
      {logement && <Slider logement={logement} />}
      {logement && <Apart_info/> }
    </div>
  );
}

export default Logement;