// Country.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Country = () => {
  const { name } = useParams();
  const countriesList = useSelector((store) => store.countries.countries);
  const sortedCountriesList = [...countriesList]
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
  console.log(sortedCountriesList.find((countri) => countri.name.common === name));
  return (
    <div>
      <h2>
        Country:
        {name}
      </h2>
    </div>
  );
};

export default Country;
