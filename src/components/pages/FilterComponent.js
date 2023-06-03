import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../assets/icon';

const FilterComponent = ({ items, filterText }) => {
  const filteredItems = items.filter((country) => country.name.common
    .toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div className="info">
      {filteredItems.map((country) => (
        <Link to={`/country/${country.name.common}`} key={country.name.common}>
          <div className="card">
            <div className="icon">
              <Icon />
            </div>
            <img src={country.flags.png} alt="flag" className="flag-img" />
            <div className="details">
              <p className="name">{country.name.common.toUpperCase()}</p>
              {country.languages && (
                <p className="name">{Object.values(country.languages).length}</p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

FilterComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.shape({
        common: PropTypes.string.isRequired,
      }).isRequired,
      flags: PropTypes.shape({
        png: PropTypes.string.isRequired,
      }).isRequired,
      languages: PropTypes.objectOf(PropTypes.string), // Updated prop type
    }),
  ).isRequired,
  filterText: PropTypes.string.isRequired,
};

export default FilterComponent;
