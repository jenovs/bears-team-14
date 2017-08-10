import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const ItemCard = ({
  id,
  imgUrl,
  title,
  description,
  expDate,
  isSaved,
  companyName,
  location,
}) =>
  <div className="item-card">
    <Link to={`/job/${id}`}>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="item-card__image"
      />
      <div className="item-card__description">
        <h2>
          {title}
        </h2>
        <div className="item-card__details">
          At <span className="item-card__at-company">{companyName}</span>{' '}
          {location}
        </div>
      </div>
      <div>
        {expDate} - {isSaved ? 'unsave' : 'save'}
      </div>
    </Link>
  </div>;

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expDate: PropTypes.string.isRequired,
  isSaved: PropTypes.bool,
};

ItemCard.defaultProps = {
  imgUrl: '/placeholder-image.png',
  isSaved: false,
};

export default ItemCard;
