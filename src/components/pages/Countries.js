import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/Countries/countriesSlice';
import Country from './Country';

const Countries = () => {
  const countriesList = useSelector((store) => store.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const sortedCountriesList = [...countriesList]
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <>
      <div>
        {sortedCountriesList.map((country) => (
          <div key={country.name.common}>
            <img
              src={country.flags.png}
              alt="flag"
              className="flag-img"
            />
            {country.name.common}
          </div>
        ))}
      </div>
      <Country />
    </>
  );
};
export default Countries;
