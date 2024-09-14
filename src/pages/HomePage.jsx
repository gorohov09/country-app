import { useNavigate } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../features/controls/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, selectCountriesInfo, selectVisibleCountries } from '../features/countries/countries-slice';
import { useEffect } from 'react';
import { selectAllControls } from '../features/controls/controls-slice';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {search, region} = useSelector(selectAllControls);
  const countries = useSelector((state) => selectVisibleCountries(state, {search, region}));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(getAllCountries());
    }
  }, [qty, dispatch])

  return (
    <>
      <Controls />
      {error && <h2>{error}</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
          <List>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>
      )}
    </>
  );
};
