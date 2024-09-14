import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useEffect } from 'react';
import { clearCountry, loadCountryByName } from '../store/details/details-actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails } from '../store/details/details-selectors';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentCountry, error, status} = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearCountry)
    }
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Загрузка...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
