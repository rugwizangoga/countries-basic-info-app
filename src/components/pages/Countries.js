import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/Countries/countriesSlice';
import Mymap from '../../assets/wmap.png';

import FilterComponent from './FilterComponent';

const Countries = () => {
  const countriesList = useSelector((store) => store.countries.countries);
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const sortedCountriesList = [...countriesList]
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="app">
      <div className="header">
        <img src={Mymap} alt="World map" className="wmap" />
        <p className="name hb">worldwide languages</p>
      </div>
      <p className="h1">languages per country</p>
      <div className="filter">
        <input
          type="text"
          placeholder="Search countries"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <FilterComponent items={sortedCountriesList} filterText={filterText} />
      </div>
    </div>
  );
};

export default Countries;
