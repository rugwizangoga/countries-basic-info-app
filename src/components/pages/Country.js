import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SecondIcon from '../../assets/SecondIcon';

const Country = () => {
  const { name } = useParams();
  const countriesList = useSelector((store) => store.countries.countries);
  const sortedCountriesList = [...countriesList]
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
  const countryInfo = sortedCountriesList.find(
    (country) => country.name.common === name,
  );

  if (!countryInfo) {
    return <div>Loading...</div>;
  }

  const { currencies, languages } = countryInfo;
  const currencyNames = currencies ? Object.keys(currencies).map(
    (currencyCode) => currencies[currencyCode].name,
  ) : [];

  const languageNames = languages ? Object.keys(languages).map(
    (languageCode) => languages[languageCode],
  ) : [];

  return (
    <div className="whole">
      <div className="back">
        <Link to="/">
          <SecondIcon />
        </Link>
        <div className="title">
          <img src={countryInfo.flags.png} alt="flag" className="flag-img" />
          <div className="details">
            <p className="name">{countryInfo.name.common.toUpperCase()}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="basic">Basic information</p>
        <ul className="list">
          <li className="odd">
            <span>Population:</span>
            {' '}
            {countryInfo.population}
          </li>
          <li>
            <span>Capital:</span>
            {' '}
            {countryInfo.capital}
          </li>
          <li className="odd">
            <span> Region: </span>
            {' '}
            {countryInfo.region}
          </li>
          <li>
            <span>Area:</span>
            {' '}
            {countryInfo.area}
          </li>
          {countryInfo.landlocked && (
            <li className="odd">
              <span> Landlocked: </span>
              <span> Yes </span>
            </li>
          )}
          <li>
            <span> Sub-region: </span>
            {' '}
            {countryInfo.subregion}
          </li>
          {currencies && languages && (
            <>
              {Object.keys(currencies).length > 0 && (
                <li className="odd">
                  <span> Currencies: </span>
                  {' '}
                  {currencyNames.join(', ')}
                </li>
              )}
              {Object.keys(languages).length > 0 && (
                <li>
                  <span> Languages: </span>
                  {' '}
                  {languageNames.join(', ')}
                </li>
              )}
            </>
          )}
          {countryInfo.borders && countryInfo.borders.length > 0 && (
            <li className="odd">
              <span>Borders:</span>
              {' '}
              {countryInfo.borders.join(', ')}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Country;
