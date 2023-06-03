// Countries.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/Countries/countriesSlice';
import Mymap from '../../assets/wmap.png';
import Icon from '../../assets/icon';

const Countries = () => {
  const countriesList = useSelector((store) => store.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const sortedCountriesList = [...countriesList]
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="app">
      <img src={Mymap} alt="World map" className="wmap" />
      <h1>Number of official languages per country</h1>
      <div className="info">
        {sortedCountriesList.map((country, index) => (
          <Link to={`/country/${country.name.common}`} key={country.name.common}>
            <div className={`card ${index % 3 === 1 || index % 3 === 2 ? 'alternate-bg' : ''}`}>
              <div className="icon">
                <Icon />
              </div>
              <img src={country.flags.png} alt="flag" className="flag-img" />
              <div className="details">
                <p className="name">{country.name.common.toUpperCase()}</p>
                {country.languages && <p className="name">{Object.values(country.languages).length}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
